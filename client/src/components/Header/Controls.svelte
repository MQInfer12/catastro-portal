<script lang="ts">
  import { clickModalState } from "../../global/store/clickModalState";
  import { clickResult } from "../../global/store/clickResult";
  import { searchResult } from "../../global/store/search";
  import { page } from "../Aside/store/page";
  import ActualSearch from "./ActualSearch.svelte";
  import Search from "./Search.svelte";
  import { showSearchDetails } from "./utilities/showSearchDetails";
  
  $: disabled = $page === "Capas de información"
</script>

<section>
  <Search />
  {#if !disabled}
    {#if $searchResult}
      <ActualSearch 
        text={$searchResult.option.text}
        color={$searchResult.option.color}
        openModal={showSearchDetails}
        destroy={() => $searchResult = null}
      />
    {/if}
  {:else}
    {#if $clickResult}
      <ActualSearch 
        text={$clickResult.option.text}
        color={$clickResult.option.color}
        openModal={() => $clickModalState = $clickResult}
        destroy={() => $clickResult = null}
      />
    {/if}
  {/if}
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