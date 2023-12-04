<script lang="ts">
  import { map } from "../../global/store/map";
  import LayerCard from "./LayerCard.svelte";
  import { catastroLayers } from "./data/catastroLayers";

  export let layers = $catastroLayers;
  export let disabled = false;

  $: layers.forEach(layer => {
    if (layer.active) {
      $map.add(layer.data);
    } else {
      $map.remove(layer.data);
    }
  });
</script>

<div>
  {#each layers as layer}
    <LayerCard 
      {disabled}
      {layer}
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