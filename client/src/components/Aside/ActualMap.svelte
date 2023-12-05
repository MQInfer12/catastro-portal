<script>
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import { map } from "../../global/store/map";
  import { searchResult } from "../../global/store/search";
  import IconCheck from "../../icons/IconCheck.svelte";
  import IconDetail from "../../icons/IconDetail.svelte";
  import IconImage from "../../icons/IconImage.svelte";
  import IconSearch from "../../icons/IconSearch.svelte";
  import IconWorld from "../../icons/IconWorld.svelte";
  import IconX from "../../icons/IconX.svelte";
  import BasemapCard from "./BasemapCard.svelte";
  import Layers from "./Layers.svelte";
  import { arcgisBasemaps } from "./data/arcgisBasemaps";
  import { catastroLayers } from "./data/catastroLayers";
  import { page } from "./store/page";

  const actualBasemap = arcgisBasemaps.find(bm => bm.basemap === $map.basemap.id);
  const actualLayers = $catastroLayers.filter(layer => layer.active);
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
  {#if actualLayers.length}
  <Layers 
    layers={actualLayers}
    disabled
  />
  {/if}
  <div class="info">
    {#if !actualLayers.length}
    <p>Selecciona imágenes desde nuestra galería</p>
    {/if}
    <Button 
      color="purple"
      on:click={() => $page = "Galería de imágenes"}
      text={actualLayers.length ? "Cambiar" : "Seleccionar"}
    >
      <IconContainer><IconImage /></IconContainer>
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