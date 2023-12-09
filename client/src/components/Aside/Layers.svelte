<script lang="ts">
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import type { ColorType } from "../../global/interfaces/colorType";
  import { map } from "../../global/store/state/map";
  import IconReload from "../../icons/IconReload.svelte";
  import LayerCard from "./LayerCard.svelte";
  import type { CatastroLayer } from "./interfaces/catastroLayer";

  export let layers: CatastroLayer[] = [];
  export let disabled = false;
  export let reload = () => {};

  $: layers.forEach(layer => {
    if(layer.data) {
      if (layer.active) {
        $map.add(layer.data);
      } else {
        $map.remove(layer.data);
      }
    }
  });

  export let color: ColorType = "neutral";
</script>

<div class="container">
  {#if layers.length === 0}
    <div class="ups">
      <p>Ups, no encontramos objetos aquí...</p>
      <Button 
        text="Volver a cargar"
        color="purple"
        on:click={reload}
      ><IconContainer><IconReload /></IconContainer></Button>
    </div>
  {:else}
  {#each layers as layer}
    <LayerCard 
      {disabled}
      {layer}
      {color}
      on:click={() => layer.active = !layer.active} 
    />
  {/each}
  {/if}
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ups {
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