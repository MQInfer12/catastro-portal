import { writable } from "svelte/store";
import type { Feature } from "../../interfaces/geojson";
import type { ColorType } from "../../interfaces/colorType";
import type Graphic from "@arcgis/core/Graphic";

export interface ClickResult {
  option: {
    type: string
    color: ColorType
    text: string
  },
  feature: Feature,
  graphic: Graphic
}

export const clickResult = writable<ClickResult | null>(null);