import { writable } from "svelte/store";
import type { PageType } from "../interfaces/pageType";

export const page = writable<PageType>("Mapa actual");