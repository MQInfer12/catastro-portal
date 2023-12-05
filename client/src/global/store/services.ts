import { writable } from "svelte/store";
import DistritosJSON from "../data/distritos.json";
import SubdistritosJSON from "../data/subdistritos.json";
import ComunasJSON from "../data/comunas.json";
import EducacionJSON from "../data/educacion.json";
import SaludJSON from "../data/salud.json";
import type { ServiceData } from "../interfaces/serviceData";
import type { GeoJSON } from "../interfaces/geojson";

export const services = writable<ServiceData[]>([
  {
    name: "distrito",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/1/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    data: DistritosJSON as GeoJSON,
    color: "yellow",
    nameColumn: "Nombre",
    extraColumn: "comuna"
  },
  {
    name: "subdistrito",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/3/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    data: SubdistritosJSON as GeoJSON,
    color: "red",
    nameColumn: "Nombre"
  },
  {
    name: "comuna",
    url: "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/2/query?where=Comuna+LIKE+%27%25%27&outFields=*&f=geojson",
    data: ComunasJSON as GeoJSON,
    color: "purple",
    nameColumn: "Comuna"
  },
  {
    name: "educación",
    url: "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/2/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    data: EducacionJSON as GeoJSON,
    color: "blue",
    nameColumn: "NOMBRE",
    extraColumn: "DEPENDENCI"
  },
  {
    name: "salud",
    url: "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/0/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    data: SaludJSON as GeoJSON,
    color: "green",
    nameColumn: "NOMBRE",
    extraColumn: "TIPO_ESTAB"
  }
]);