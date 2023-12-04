import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { writable } from "svelte/store";

export const view = writable<MapView>();
export const map = writable<Map>(new Map({
  basemap: "gray-vector",
}));