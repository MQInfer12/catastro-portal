import type { ColorType } from "./colorType";
import type { GeoJSON } from "./geojson";

export interface ServiceData {
  id: number
  name: string
  url: string
  img: string | null
  data: GeoJSON | null
  color: ColorType
  nameColumn: string
  extraColumn?: string
}