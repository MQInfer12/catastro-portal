<script lang="ts">
  import ActualMap from "./ActualMap.svelte";
import Basemaps from "./Basemaps.svelte";
  import Layers from "./Layers.svelte";
  import { page } from "./store/page";
</script>

<div class="right">
  {#if $page === "Mapa actual"} 
    <ActualMap />
  {:else if $page === "Mapas base"}
    <Basemaps />
  {:else if $page === "Galería de imágenes"}
    <Layers />
  {/if}
</div>

<style>
  .right {
    grid-area: right;
    padding: 8px;
    overflow: auto;
  }
</style>