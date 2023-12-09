<script lang="ts">
  import { catastroImages } from "../../global/store/db/catastroImages";
  import { catastroLayers } from "../../global/store/db/catastroLayers";
  import ActualMap from "./ActualMap.svelte";
  import Basemaps from "./Basemaps.svelte";
  import InformationLayers from "./InformationLayers.svelte";
  import Layers from "./Layers.svelte";
  import { page } from "./store/page";
</script>

<div class="right">
  {#if $page === "Mapa actual"} 
    <ActualMap />
  {:else if $page === "Mapas base"}
    <Basemaps />
  {:else if $page === "Galería de imágenes"}
    <Layers 
      layers={$catastroImages}
      color="purple"
    />
  {:else if $page === "Capas WMS"}
    <Layers 
      layers={$catastroLayers}
      color="blue"
    />
  {:else if $page === "Capas de información"}
    <InformationLayers />
  {/if}
</div>

<style>
  .right {
    grid-area: right;
    padding: 8px;
    overflow: auto;
  }
</style>