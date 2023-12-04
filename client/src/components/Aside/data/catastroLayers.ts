import WMSLayer from "@arcgis/core/layers/WMSLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import type { CatastroLayer } from "../interfaces/catastroLayer";
import { writable } from "svelte/store";
import LDemografia from "../../../assets/images/layers/demografia.png";
import LOTBs from "../../../assets/images/layers/otbs.png";
import LManzanas from "../../../assets/images/layers/manzanas.png";

export const catastroLayers = writable<CatastroLayer[]>([
  {
    name: "Demografía",
    active: false,
    src: LDemografia,
    data: new WMSLayer({
      url: "http://186.121.246.218:6080/arcgis/services/catastro/DEM_500/MapServer/WMSServer",
    })
  },
  {
    name: "OTBs",
    active: false,
    src: LOTBs,
    data: new WMSLayer({
      url: "http://186.121.246.218:6080/arcgis/services/planificacion/otbsDb/MapServer/WMSServer",
    })
  },
  {
    name: "Manzanas",
    active: false,
    src: LManzanas,
    data: new WMSLayer({
      url: "http://186.121.246.218:6080/arcgis/services/catastro/manzanasWms/MapServer/WMSServer",
    })
  },
  /* {
    name: "Sat",
    active: false,
    color: "var(--green-1)",
    data: new MapImageLayer({
      url: "http://192.168.105.219:6080/arcgis/rest/services/imagenes/imagen2022/MapServer",
    }),
  }, */
]);