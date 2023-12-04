<script lang="ts">
  import { map } from "../../global/store/map";
  import BasemapCard from "./BasemapCard.svelte";
  import { arcgisBasemaps } from "./data/arcgisBasemaps";

  const changeBasemap = (basemap: string) => {
    //@ts-ignore
    $map.basemap = basemap;
  }
  $: actual = $map.basemap.id;
</script>

<div>
  {#each arcgisBasemaps as bm}
    <BasemapCard 
      src={bm.src}
      name={bm.name}
      active={actual === bm.basemap}
      on:click={() => changeBasemap(bm.basemap)}
    />
  {/each}
</div>

<style>
  div {
    width: 100%;
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
  }
</style>