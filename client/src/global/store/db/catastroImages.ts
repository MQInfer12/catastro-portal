import { writable } from "svelte/store";
import type { CatastroLayer } from "../../../components/Aside/interfaces/catastroLayer";
import ImagesData from '../../data/images.json';

export const catastroImages = writable<CatastroLayer[]>([]);