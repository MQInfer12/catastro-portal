import { writable } from "svelte/store";
import type { ClickResult } from "./clickResult";

export const clickModalState = writable<ClickResult | null>(null);