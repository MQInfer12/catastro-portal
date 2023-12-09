import { writable } from "svelte/store";
import type { ServiceData } from "../../interfaces/serviceData";
import ServicesData from '../../data/services'

export const services = writable<ServiceData[]>([]);