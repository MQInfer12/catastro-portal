import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import type { CatastroLayer } from "../interfaces/catastroLayer";
import { writable } from "svelte/store";
import LSatelite2022 from "../../../assets/images/layers/satelite_2022.png";
import LSatelite2015 from "../../../assets/images/layers/satelite_2015.png";

export const catastroImages = writable<CatastroLayer[]>([
  {
    name: "Satélite 2022",
    active: false,
    src: LSatelite2022,
    data: new MapImageLayer({
      url: "http://192.168.105.219:6080/arcgis/rest/services/imagenes/imagen2022/MapServer",
    }),
  },
  {
    name: "Imagen 2015",
    active: false,
    src: LSatelite2015,
    data: new MapImageLayer({
      url: "http://192.168.105.219:6080/arcgis/rest/services/imagenes/imagen2015_500/MapServer",
    }),
  },
]);