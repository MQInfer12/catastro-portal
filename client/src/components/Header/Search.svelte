<script lang="ts">
  import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import type { GeoJSON } from "../../global/interfaces/geojson";
  import { map, searchFeatureLayer, view } from "../../global/store/map";
  import { services } from "../../global/store/services";
  import IconSearch from "../../icons/IconSearch.svelte";
  import IconX from "../../icons/IconX.svelte";
  import SearchOptions from "./SearchOptions.svelte";
  import type { SearchOption } from "./interfaces/searchOption";
  import { createPointSymbol, createPolygonSymbol } from "../../global/utilities/colorToSymbol";
  import { searchResult, type SearchResult } from "../../global/store/search";

  let filter = "";

  const searchOptions: SearchOption[] = $services
    .map(service => service.data?.features
      .map(feature => {
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

  $: filtered = searchOptions.filter(option => option.searchBy.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  $: active = filter.length > 0 && filtered.length !== 0;

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
    if($searchFeatureLayer) {
      $map.remove($searchFeatureLayer);
    }
    if(!$searchResult) return;
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
          createPointSymbol($searchResult.option.color, 1, 12) : 
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

  $: $searchResult, showGeoJson();
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
      placeholder="Buscar..."
      bind:value={filter} 
      style={`border-radius: ${active ? "8px 8px 0 0" : "8px"}`}
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
  input::placeholder {
    color: var(--gray-500);
  }
</style>