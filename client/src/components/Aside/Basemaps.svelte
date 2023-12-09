<script lang="ts">
  import { arcgisBasemaps, defaultBasemap } from "../../global/store/db/arcgisBasemaps";
  import { map } from "../../global/store/state/map";
  import BasemapCard from "./BasemapCard.svelte";

  const changeBasemap = (basemap: string) => {
    //@ts-ignore
    $map.basemap = basemap;
  }
  $: actual = $map.basemap.id;
</script>

<div>
  {#if $arcgisBasemaps.length === 0}
  <BasemapCard 
    src={defaultBasemap.src}
    name={defaultBasemap.name}
    active
    on:click={() => changeBasemap(defaultBasemap.basemap)}
  />
  {:else}
  {#each $arcgisBasemaps as bm}
    <BasemapCard 
      src={bm.src}
      name={bm.name}
      active={actual === bm.basemap}
      on:click={() => changeBasemap(bm.basemap)}
    />
  {/each}
  {/if}
</div>

<style>
  div {
    width: 100%;
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }
</style>