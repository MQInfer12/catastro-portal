import { writable } from "svelte/store";
import GrayBasemap from '../../../assets/images/basemaps-compressed/image.png';
import BasemapsData from '../../data/basemaps.json'; 

export interface ArcgisBasemap {
  id: number
  src: string | null
  name: string
  basemap: string
}

export const defaultBasemap: ArcgisBasemap = {
  id: 0,
  basemap: "gray-vector",
  name: "Gris",
  src: GrayBasemap
}

export const arcgisBasemaps = writable<ArcgisBasemap[]>([]);