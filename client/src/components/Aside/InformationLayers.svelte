<script lang="ts">
  import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
  import { informationLayer, map, view } from "../../global/store/map";
  import { services } from "../../global/store/db/services";
  import { createPointSymbol, createPolygonSymbol } from "../../global/utilities/colorToSymbol";
  import type { ServiceData } from "../../global/interfaces/serviceData";
  import { onDestroy, onMount } from "svelte";
  import type Map from "@arcgis/core/Map";
  import { graphicsLayer, showedService } from "../../global/store/showedService";
  import { clickResult } from "../../global/store/clickResult";
  import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
  import Graphic from "@arcgis/core/Graphic.js";
  import InformationCard from "./InformationCard.svelte";

  $: geometryServices = $services
    .filter(service => service.data?.features.every(feature => feature.geometry));
    
  const handleChangeInformation = (service: ServiceData) => {
    $clickResult = null;
    $showedService = service;
  }

  const showGeoJson = () => {
    if($informationLayer) {
      $map.remove($informationLayer);
    }
    if(!$showedService) return;
    const blob = new Blob([JSON.stringify($showedService.data)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const featureType = $showedService.data?.features[0].geometry?.type;
    $informationLayer = new GeoJSONLayer({
      url: url,
      renderer: {
        //@ts-ignore
        type: "simple",
        symbol: 
          featureType === "Point" ? 
          createPointSymbol($showedService.color, 0.4, 12) : 
          createPolygonSymbol($showedService.color, 0.4)
      }
    });
    $map.add($informationLayer);
    $informationLayer.when(() => {
      $view.goTo({
        target: $informationLayer.fullExtent,
        duration: 2000,
        easing: "ease",
      });
    });
  }

  let savedMap: Map = $map;
  onMount(() => {
    savedMap = $map;
    $map.removeAll();
  });
  onDestroy(() => {
    $map.remove($informationLayer);
    $map.remove($graphicsLayer);
    $clickResult = null;
    $showedService = null;
    $map = savedMap;
  });

  $: $showedService, showGeoJson();

  const createGraphicsLayer = () => {
    $map.remove($graphicsLayer);
    if(!$clickResult || !$showedService) return;
    const geometryType = $clickResult.graphic.geometry.type;
    $graphicsLayer = new GraphicsLayer({
      graphics: [
        new Graphic({
          geometry: $clickResult.graphic.geometry,
          symbol:
            geometryType === "point"
              ? createPointSymbol($showedService.color, 1, 12)
              : createPolygonSymbol($showedService.color),
          attributes: $clickResult.graphic.attributes,
        }),
      ],
    });
    $map.add($graphicsLayer);
  }

  $: $clickResult, createGraphicsLayer();
</script>

<div>
  {#each geometryServices as service}
    <InformationCard
      {service}
      active={$showedService === service}
      on:click={() => handleChangeInformation(service)} 
    />
  {/each}
</div>

<style>
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>