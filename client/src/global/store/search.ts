import { writable } from "svelte/store";
import type { GeoJSON } from "../interfaces/geojson";
import type { SearchOption } from "../../components/Header/interfaces/searchOption";

export interface SearchResult {
  option: SearchOption
  geojson: GeoJSON
}

export const searchResult = writable<SearchResult>();