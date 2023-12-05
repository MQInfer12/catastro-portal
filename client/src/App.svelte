<script lang="ts">
  import { onMount } from "svelte";
  import Aside from "./components/Aside/Aside.svelte";
  import Header from "./components/Header/Header.svelte";
  import Map from "./components/Map/Map.svelte";
  import { services } from "./global/store/services";
  import type { GeoJSON } from "./global/interfaces/geojson";
    import Modal from "./global/components/Modal.svelte";

  onMount(async () => {
    for(const service of $services) {
      if(service.data) continue;
      console.log("fetching: " + service.name);
      const res = await fetch(service.url);
      if(!res.ok) {
        console.log("Error al obtener: " + service.name);
        continue;
      }
      const geojson = await res.json() as GeoJSON;
      $services = $services.map(ser => {
        if(ser.id === service.id) {
          return {...service, data: geojson }
        }
        return ser;
      });
    }
  });
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
      "sidebar header header"
      "sidebar map map";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr 1fr;
  }
</style>
