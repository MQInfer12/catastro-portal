import { writable } from "svelte/store";
import LDemografia from "../../../assets/images/layers/demografia.png";
import LOTBs from "../../../assets/images/layers/otbs.png";
import LManzanas from "../../../assets/images/layers/manzanas.png";
import type { CatastroLayer } from "../../../components/Aside/interfaces/catastroLayer";

export const catastroLayers = writable<CatastroLayer[]>([
  {
    name: "Demografía",
    active: false,
    src: LDemografia,
    url: "http://186.121.246.218:6080/arcgis/services/catastro/DEM_500/MapServer/WMSServer",
    data: null
  },
  {
    name: "OTBs",
    active: false,
    src: LOTBs,
    url: "http://186.121.246.218:6080/arcgis/services/planificacion/otbsDb/MapServer/WMSServer",
    data: null
  },
  {
    name: "Manzanas",
    active: false,
    src: LManzanas,
    url: "http://186.121.246.218:6080/arcgis/services/catastro/manzanasWms/MapServer/WMSServer",
    data: null
  },
]);