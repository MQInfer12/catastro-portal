<script lang="ts">
  import { onMount } from "svelte";
  import Aside from "./components/Aside/Aside.svelte";
  import Header from "./components/Header/Header.svelte";
  import Map from "./components/Map/Map.svelte";
  import { services } from "./global/store/db/services";
  import type { GeoJSON } from "./global/interfaces/geojson";
  import { informationLayer, searchFeatureLayer, view } from "./global/store/state/map";
  import { showedService } from "./global/store/state/showedService";
  import { clickResult } from "./global/store/state/clickResult";
  import WMSLayer from "@arcgis/core/layers/WMSLayer.js";
  import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
  import { catastroLayers } from "./global/store/db/catastroLayers";
  import { catastroImages } from "./global/store/db/catastroImages";
  import { showSearchDetails } from "./components/Header/utilities/showSearchDetails";
  import { arcgisBasemaps } from "./global/store/db/arcgisBasemaps";
  import { getRequest } from "./global/utilities/getRequest";
  import { cachedServices } from "./global/store/state/cachedServices";
  import ServicesData from "./global/data/services";
  import type { ServiceData } from "./global/interfaces/serviceData";

  onMount(async () => {
    /* LLAMADA AL BACKEND PARA LLENAR DATOS */
    $arcgisBasemaps = await getRequest("mapabase") || [];
    $catastroImages = await getRequest("catastro/image") || [];
    $catastroLayers = await getRequest("catastro/layer") || [];

    /* ONCLICK MAPA */
    const clickHandler = (e: any) => {
      $view.hitTest(e).then((res) => {
        if(res.results.length > 0) {
          if(res.results[0].layer === $searchFeatureLayer) {
            showSearchDetails();
          }
          if (res.results[0].layer === $informationLayer && $showedService) {
            //@ts-ignore
            const graphic = res.results[0].graphic;
            const ObjectId = graphic.attributes.OBJECTID || graphic.attributes.FID;
            const feature = $showedService.data?.features.find(feature => feature.properties.OBJECTID === ObjectId || feature.properties.FID === ObjectId);
            if(!feature) return;
            $clickResult = {
              option: {
                color: $showedService.color,
                type: $showedService.name,
                text: feature.properties[$showedService.nameColumn]
              },
              feature,
              graphic
            }
          }
        }
      });
    }
    $view.on("click", (e) => clickHandler(e));
  });

  let flag = false;
  const fetchServices = async () => {
    if($cachedServices) {
      console.log("Usando servicios cacheados");
      flag = false;
      $services = ServicesData as ServiceData[];
    } else if(!flag) {
      flag = true;
      $services = await getRequest("servicio") || [];
      console.log($services);
      for(const service of $services) {
        if(service.data) continue;
        console.log("fetching: " + service.name);
        try {
          const res = await fetch(service.url);
          const geojson = await res.json() as GeoJSON;
          $services = $services.map(ser => {
            if(ser.id === service.id) {
              return {...service, data: geojson }
            }
            return ser;
          });
        } catch(e) {
          console.log("Error al obtener: " + service.name);
        }
      }
    }
  }

  /* CARGAR URL EN CAPAS WMS Y CAPAS DE IMAGENES */
  $: $catastroLayers = $catastroLayers.map(layer => ({
    ...layer,
    data: new WMSLayer({
      url: layer.url
    })
  }));
  $: $catastroImages = $catastroImages.map(image => ({
    ...image,
    data: new MapImageLayer({
      url: image.url
    })
  }));
  $: $services, $cachedServices, fetchServices();
</script>

<main>
  <Header />
  <Aside />
  <Map />
</main>

<style>
  main {
    height: 100dvh;
    display: grid;
    grid-template-areas: 
      "sidebar header"
      "sidebar map";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;
  }
</style>
