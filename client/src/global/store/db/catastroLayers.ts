import { writable } from "svelte/store";
import type { CatastroLayer } from "../../../components/Aside/interfaces/catastroLayer";
import LayersData from "../../data/layers.json"

export const catastroLayers = writable<CatastroLayer[]>([]);