<script lang="ts">
  import { catastroImages } from "../../global/store/db/catastroImages";
  import { catastroLayers } from "../../global/store/db/catastroLayers";
  import { getRequest } from "../../global/utilities/getRequest";
  import ActualMap from "./ActualMap.svelte";
  import Basemaps from "./Basemaps.svelte";
  import Configuration from "./Configuration.svelte";
  import InformationLayers from "./InformationLayers.svelte";
  import Layers from "./Layers.svelte";
  import { page } from "./store/page";

  const getImages = async () => {
    $catastroImages = await getRequest("catastro/image") || []
  }
  const getLayers = async () => {
    $catastroLayers = await getRequest("catastro/layer") || []
  }
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
      reload={getImages}
    />
  {:else if $page === "Capas WMS"}
    <Layers 
      layers={$catastroLayers}
      color="blue"
      reload={getLayers}
    />
  {:else if $page === "Capas de información"}
    <InformationLayers />
  {:else if $page === "Configuración"}
    <Configuration />
  {/if}
</div>

<style>
  .right {
    grid-area: right;
    padding: 8px;
    overflow: auto;
  }
</style>