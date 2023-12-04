<script>
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import { map } from "../../global/store/map";
  import IconCheck from "../../icons/IconCheck.svelte";
  import IconImage from "../../icons/IconImage.svelte";
  import IconWorld from "../../icons/IconWorld.svelte";
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
      text="Cambiar"
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
    gap: 8px;
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
</style>