import { writable } from "svelte/store";

const localData = JSON.parse(localStorage.getItem("cachedServices") || "false");
export const cachedServices = writable(localData);