<script lang="ts">
  import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import { map, searchFeatureLayer, view } from "../../global/store/state/map";
  import { services } from "../../global/store/db/services";
  import IconSearch from "../../icons/IconSearch.svelte";
  import IconX from "../../icons/IconX.svelte";
  import SearchOptions from "./SearchOptions.svelte";
  import type { SearchOption } from "./interfaces/searchOption";
  import { createPointSymbol, createPolygonSymbol } from "../../global/utilities/colorToSymbol";
  import { searchResult, type SearchResult } from "../../global/store/state/search";
  import { page } from "../Aside/store/page";
  import { appearMenu } from "../../global/store/state/appearMenu";
  import IconSidemenu from "../../icons/IconSidemenu.svelte";

  $: disabled = $page === "Capas de información"

  let filter = "";
  let searchOptions: SearchOption[] = [];
  const getSearchOptions = () => {
    searchOptions = $services
      .map(service => service.data?.features
        ?.map(feature => {
          return {
            id: feature.id,
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
  }

  $: $services, getSearchOptions();
  $: filtered = searchOptions.filter(option => option.searchBy.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  $: active = (filter.length > 0 && filtered.length !== 0) && !disabled;

  const handleSearchButton = () => {
    if(active) {
      filter = "";
    } else {
      document.getElementById("search")?.focus();
    }
  }

  const handleSearch = (option: SearchOption) => {
    filter = "";
    const service = $services.find(service => service.name === option.type);
    if(!service || !service.data) return;
    const feature = service.data?.features.find(feature => feature.id === option.id);
    if(!feature) return;
    const showData: SearchResult = {
      option,
      geojson: {
        ...service.data,
        features: [feature]
      }
    }
    $searchResult = showData;
  }

  const showGeoJson = () => {
    $map.remove($searchFeatureLayer);
    if(!$searchResult || disabled) return;
    const blob = new Blob([JSON.stringify($searchResult.geojson)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const feature = $searchResult.geojson.features[0];
    if(!feature.geometry) return alert("No se encontró geometría para este objeto");
    $searchFeatureLayer = new GeoJSONLayer({
      url: url,
      renderer: {
        //@ts-ignore
        type: "simple",
        symbol: 
          feature.geometry.type === "Point" ? 
          createPointSymbol($searchResult.option.color, 1, 8) : 
          createPolygonSymbol($searchResult.option.color, 0.4)
      }
    });
    $map.add($searchFeatureLayer);
    $searchFeatureLayer.when(() => {
      $view.goTo({
        target: $searchFeatureLayer.fullExtent,
        duration: 2000,
        easing: "ease",
      });
    });
  }

  let innerWidth = 0;

  $: thresholdButton = innerWidth >= 900;
  $: $searchResult, disabled, showGeoJson();
</script>

<svelte:window bind:innerWidth />
<div class="container">
  {#if thresholdButton}
  <Button
    {disabled}
    color={$searchResult ? $searchResult.option.color : "neutral"}
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
  {:else} 
  <Button
    color={$searchResult ? $searchResult.option.color : "neutral"}
    on:click={() => $appearMenu = true}
  >
    <IconContainer><IconSidemenu /></IconContainer>
  </Button>
  {/if}
  <div class="input-container">
    <input 
      id="search" 
      type="text"
      placeholder={$searchResult ? "Realiza otra búsqueda..." : "Realiza una búsqueda..."}
      bind:value={filter} 
      {disabled}
      style={`border-radius: ${active ? "8px 8px 0 0" : "8px"}`}
      title={disabled ? "La búsqueda se deshabilita al ver las capas de información" : ""}
    >
    <SearchOptions 
      {active}
      handleSearch={handleSearch}
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
  input:disabled {
    background-color: var(--gray-200);
  }
  input::placeholder {
    color: var(--gray-500);
  }
  @media screen and (max-width: 1260px) {
    .container, .input-container, input {
      width: 100%;
    }
  }
</style>