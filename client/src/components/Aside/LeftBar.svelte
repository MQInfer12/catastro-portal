<script lang="ts">
  import IconConfig from "../../icons/IconConfig.svelte";
  import IconImage from "../../icons/IconImage.svelte";
  import IconLayers from "../../icons/IconLayers.svelte";
  import IconMap from "../../icons/IconMap.svelte";
  import IconTarget from "../../icons/IconTarget.svelte";
  import IconWorld from "../../icons/IconWorld.svelte";
  import LeftIconButton from "./LeftIconButton.svelte";
  import { page } from "./store/page";
</script>

<div class="left">
  <LeftIconButton 
    on:click={() => $page = "Mapa actual"} 
    title="Mapa actual" 
    color="yellow"
    disabled={$page === "Mapa actual"}
    height="92px !important"
  >
    <IconMap />
  </LeftIconButton>
  <hr />
  <LeftIconButton 
    on:click={() => $page = "Mapas base"} 
    title="Mapas base" 
    color="red"
    disabled={$page === "Mapas base"}
  >
    <IconWorld />
  </LeftIconButton>
  <LeftIconButton 
    on:click={() => $page = "Galería de imágenes"} 
    title="Galería de imágenes" 
    color="purple"
    disabled={$page === "Galería de imágenes"}
  >
    <IconImage />
  </LeftIconButton>
  <LeftIconButton 
    on:click={() => $page = "Capas WMS"} 
    title="Capas WMS" 
    color="blue"
    disabled={$page === "Capas WMS"}
  >
    <IconLayers />
  </LeftIconButton>
  <hr />
  <LeftIconButton 
    on:click={() => $page = "Capas de información"} 
    title="Capas de información" 
    color="green"
    disabled={$page === "Capas de información"}
  >
    <IconTarget />
  </LeftIconButton>
  <hr />
  <LeftIconButton
  on:click={() => $page = "Configuración"} 
    title="Configuración"
    color="neutral"
    disabled={$page === "Configuración"}
  >
    <IconConfig />
  </LeftIconButton>
</div>

<style>
  .left {
    grid-area: left;
    background-color: var(--gray-500);
    width: 60px;
    padding: 8px 6px 8px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
</style>