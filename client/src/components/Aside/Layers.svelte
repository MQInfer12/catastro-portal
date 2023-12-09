<script lang="ts">
  import type { ColorType } from "../../global/interfaces/colorType";
  import { map } from "../../global/store/map";
  import LayerCard from "./LayerCard.svelte";
  import type { CatastroLayer } from "./interfaces/catastroLayer";

  export let layers: CatastroLayer[] = [];
  export let disabled = false;

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

<div>
  {#each layers as layer}
    <LayerCard 
      {disabled}
      {layer}
      {color}
      on:click={() => layer.active = !layer.active} 
    />
  {/each}
</div>

<style>
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>