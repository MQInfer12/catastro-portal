import { writable } from "svelte/store";
import LSatelite2022 from "../../../assets/images/layers/satelite_2022.png";
import LSatelite2015 from "../../../assets/images/layers/satelite_2015.png";
import type { CatastroLayer } from "../../../components/Aside/interfaces/catastroLayer";

export const catastroImages = writable<CatastroLayer[]>([
  {
    name: "Satélite 2022",
    active: false,
    src: LSatelite2022,
    url: "http://192.168.105.219:6080/arcgis/rest/services/imagenes/imagen2022/MapServer",
    data: null
  },
  {
    name: "Imagen 2015",
    active: false,
    src: LSatelite2015,
    url: "http://192.168.105.219:6080/arcgis/rest/services/imagenes/imagen2015_500/MapServer",
    data: null
  },
]);