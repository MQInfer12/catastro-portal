<script lang="ts">
  import Button from "../../global/components/Button.svelte";
import IconContainer from "../../global/components/IconContainer.svelte";
  import { services } from "../../global/store/services";
  import IconSearch from "../../icons/IconSearch.svelte";
  import IconX from "../../icons/IconX.svelte";
  import SearchOptions from "./SearchOptions.svelte";
  import type { SearchOption } from "./interfaces/searchOption";

  let filter = "";

  const searchOptions: SearchOption[] = $services
    .map(service => service.data?.features
      .map(feature => {
        console.log(feature);
        return {
          text: feature.properties[service.nameColumn],
          small: service.extraColumn ? feature.properties[service.extraColumn] : "",
          searchBy: service.name + " " + feature.properties[service.nameColumn],
          type: service.name,
          color: service.color
        }
      })
    )
    .filter(service => service !== undefined)
    .flat() as SearchOption[];

  $: filtered = searchOptions.filter(option => option.searchBy.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  $: active = filter.length > 0 && filtered.length !== 0;

  const handleSearchButton = () => {
    if(active) {
      filter = "";
    } else {
      document.getElementById("search")?.focus();
    }
  }

  const handleSearch = () => {
    
  }
</script>

<div class="container">
  <Button
    color="blue"
    on:click={handleSearchButton}
  >
    <IconContainer>
    {#if active}
    <IconX />
    {:else}
    <IconSearch />
    {/if}
    </IconContainer>
  </Button>
  <div class="input-container">
    <input 
      id="search" 
      type="text"
      bind:value={filter} 
      style={`border-radius: ${active ? "8px 8px 0 0" : "8px"}`}
    >
    <SearchOptions 
      {active}
      handleSearch={() => {}}
      options={filtered}
    />
  </div>
</div>

<style>
  .container {
    height: 36px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .input-container {
    height: 100%;
    position: relative;
  }
  input {
    height: 100%;
    outline: none;
    padding: 0 12px;
    border: none;
    color: var(--gray-600);
    width: 420px;
    font-weight: 300;
    transition: border-radius 0.3s;
  }
  .icon {
    position: absolute;
    padding: 0 10px;
    height: 100%;
    display: flex;
    cursor: pointer;
    border-radius: 8px 0 0 8px;
    align-items: center;
    height: 100%;
  }
</style>