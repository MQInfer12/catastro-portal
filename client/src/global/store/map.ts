import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { writable } from "svelte/store";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js";

export const view = writable<MapView>();
export const map = writable<Map>(new Map({
  basemap: "gray-vector",
}));
export const searchFeatureLayer = writable<GeoJSONLayer>();