<script lang="ts">
  import ActualSearch from "./ActualSearch.svelte";
import Search from "./Search.svelte";
</script>

<section>
  <Search />
  <ActualSearch />
</section>

<style>
  section {
    height: 50px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-800);
  }
</style>