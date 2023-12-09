import { writable } from "svelte/store";
import type { ServiceData } from "../../interfaces/serviceData";
import type GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export const showedService = writable<ServiceData | null>(null);
export const graphicsLayer = writable<GraphicsLayer>();