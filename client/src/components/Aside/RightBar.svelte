<script lang="ts">
  import ActualMap from "./ActualMap.svelte";
  import Basemaps from "./Basemaps.svelte";
  import Layers from "./Layers.svelte";
  import { catastroImages } from "./data/catastroImages";
  import { catastroLayers } from "./data/catastroLayers";
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
  {/if}
</div>

<style>
  .right {
    grid-area: right;
    padding: 8px;
    overflow: auto;
  }
</style>