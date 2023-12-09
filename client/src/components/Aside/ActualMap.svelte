<script>
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import { arcgisBasemaps } from "../../global/store/db/arcgisBasemaps";
  import { catastroImages } from "../../global/store/db/catastroImages";
  import { catastroLayers } from "../../global/store/db/catastroLayers";
  import { map } from "../../global/store/map";
  import { searchResult } from "../../global/store/search";
  import IconCheck from "../../icons/IconCheck.svelte";
  import IconDetail from "../../icons/IconDetail.svelte";
  import IconImage from "../../icons/IconImage.svelte";
    import IconLayers from "../../icons/IconLayers.svelte";
  import IconSearch from "../../icons/IconSearch.svelte";
  import IconTarget from "../../icons/IconTarget.svelte";
  import IconWorld from "../../icons/IconWorld.svelte";
  import IconX from "../../icons/IconX.svelte";
    import { showSearchDetails } from "../Header/utilities/showSearchDetails";
  import BasemapCard from "./BasemapCard.svelte";
  import Layers from "./Layers.svelte";
  import { page } from "./store/page";

  const actualBasemap = $arcgisBasemaps.find(bm => bm.basemap === $map.basemap.id);
  const actualLayers = $catastroLayers.filter(layer => layer.active);
  const actualImages = $catastroImages.filter(layer => layer.active);
</script>
<section>
  {#if actualBasemap}
  <h2>Búsqueda</h2>
  <div class="info">
    {#if !$searchResult}
    <p>Realiza una búsqueda para ver sus datos con detalle</p>
    <Button 
      color="neutral"
      text="Buscar"
      on:click={() => document.getElementById("search")?.focus()}
    >
      <IconContainer><IconSearch /></IconContainer>
    </Button>
    {:else}
    <p>Tu búsqueda actual:</p>
    <p>{$searchResult.option.text}</p>
    <div class="buttons">
      <Button 
        color={$searchResult.option.color}
        text="Ver detalle"
        on:click={showSearchDetails}
      >
        <IconContainer><IconDetail /></IconContainer>
      </Button>
      <Button
        color={$searchResult.option.color}
        on:click={() => $searchResult = null}
      >
        <IconContainer><IconX /></IconContainer>
      </Button>
    </div>
    {/if}
  </div>
  <hr />
  <h2>Mapa base</h2>
  <BasemapCard 
    name={actualBasemap.name}
    src={actualBasemap.src}
    active={false}
    disabled
  />
  <div class="info">  
    <Button 
      color="red"
      on:click={() => $page = "Mapas base"}
      text="Cambiar"
    >
      <IconContainer><IconWorld /></IconContainer>
    </Button>
  </div>
  {/if}
  <h2>Imágenes</h2>
  {#if actualImages.length}
  <Layers 
    layers={actualImages}
    disabled
  />
  {/if}
  <div class="info">
    {#if !actualImages.length}
    <p>Selecciona imágenes desde nuestra galería</p>
    {/if}
    <Button 
      color="purple"
      on:click={() => $page = "Galería de imágenes"}
      text={actualImages.length ? "Cambiar" : "Seleccionar"}
    >
      <IconContainer><IconImage /></IconContainer>
    </Button>
  </div>
  <h2>Capas WMS</h2>
  {#if actualLayers.length}
  <Layers 
    layers={actualLayers}
    disabled
  />
  {/if}
  <div class="info">
    {#if !actualLayers.length}
    <p>Selecciona capas para mostrarlas en el mapa</p>
    {/if}
    <Button 
      color="blue"
      on:click={() => $page = "Capas WMS"}
      text={actualLayers.length ? "Cambiar" : "Seleccionar"}
    >
      <IconContainer><IconLayers /></IconContainer>
    </Button>
  </div>
  <hr />
  <h2>Capas de información</h2>
  <div class="info">
    <p>Explora las distintas capas de información de una manera más completa</p>
    <Button 
      color="green"
      on:click={() => $page = "Capas de información"}
      text="Explorar"
    >
      <IconContainer><IconTarget /></IconContainer>
    </Button>
  </div>
</section>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  h2 {
    font-size: 24px;
    color: var(--white);
    margin-left: 4px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
  p {
    font-size: 14px;
    color: var(--white);
    margin-left: 4px;
    text-align: center;
    text-wrap: balance;
    opacity: 0.8;
  }
  .buttons {
    display: flex;
    gap: 8px;
  }
</style>