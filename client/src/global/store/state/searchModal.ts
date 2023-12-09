import { writable } from "svelte/store";
import type { OpenSearchModal } from "../../interfaces/searchModalState";

export const searchModalState = writable<OpenSearchModal | null>(null);