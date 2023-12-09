import { writable } from "svelte/store";
import type { ServiceData } from "../../interfaces/serviceData";
import DistritosJSON from "../../data/distritos.json";
import SubdistritosJSON from "../../data/subdistritos.json";
import ComunasJSON from "../../data/comunas.json";
import EducacionJSON from "../../data/educacion.json";
import SaludJSON from "../../data/salud.json";
import DistritosImg from "../../../assets/images/information/distritos.png";
import ComunasImg from "../../../assets/images/information/comunas.png";
import EducacionImg from "../../../assets/images/information/educacion.png";
import SaludImg from "../../../assets/images/information/salud.png";
import type { GeoJSON } from "../../interfaces/geojson";

export const services = writable<ServiceData[]>([
  {
    id: 1,
    name: "distrito",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/1/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    img: DistritosImg,
    data: DistritosJSON as GeoJSON,
    color: "yellow",
    nameColumn: "Nombre",
    extraColumn: "comuna"
  },
  {
    id: 2,
    name: "subdistrito",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/3/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    img: null,
    data: SubdistritosJSON  as GeoJSON,
    color: "red",
    nameColumn: "Nombre"
  },
  {
    id: 3,
    name: "comuna",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/2/query?where=Comuna+LIKE+%27%25%27&outFields=*&f=geojson",
    img: ComunasImg,
    data: ComunasJSON as GeoJSON,
    color: "purple",
    nameColumn: "Comuna"
  },
  {
    id: 4,
    name: "educación",
    url: "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/1/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    img: EducacionImg,
    data: EducacionJSON  as GeoJSON,
    color: "blue",
    nameColumn: "NOMBRE",
    extraColumn: "DEPENDENCI"
  },
  {
    id: 5,
    name: "salud",
    url: "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/0/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    img: SaludImg,
    data: SaludJSON as GeoJSON,
    color: "green",
    nameColumn: "NOMBRE",
    extraColumn: "TIPO_ESTAB"
  }
]);