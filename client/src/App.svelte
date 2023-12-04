<script lang="ts">
  import Aside from "./components/Aside/Aside.svelte";
  import Header from "./components/Header/Header.svelte";
  import Map from "./components/Map/Map.svelte";
</script>

<main>
  <Header />
  <Aside />
  <Map />
</main>

<style>
  main {
    height: 100dvh;
    display: grid;
    grid-template-areas: 
      "sidebar header header"
      "sidebar map map";
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr 1fr;
  }
</style>
