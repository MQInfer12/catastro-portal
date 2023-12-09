import DistritosData from "./distritos.json";
import SubdistritosData from "./subdistritos.json";
import ComunasData from "./comunas.json";
import EducacionData from "./educacion.json";
import SaludData from "./salud.json";
import DistritosImg from "../../assets/images/servicios-compressed/distritos-min.png";
import ComunasImg from "../../assets/images/servicios-compressed/comunas-min.png";
import EducacionImg from "../../assets/images/servicios-compressed/educacion-min.png";
import SaludImg from "../../assets/images/servicios-compressed/salud-min.png";

const ServicesData = [
  {
    "id": 1,
    "name": "distrito",
    "url": "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/1/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    "src": DistritosImg,
    "data": DistritosData,
    "color": "yellow",
    "nameColumn": "Nombre",
    "extraColumn": "comuna"
  },
  {
    "id": 2,
    "name": "subdistrito",
    "url": "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/3/query?where=Nombre+LIKE+%27%25%27&outFields=*&f=geojson",
    "src": null,
    "data": SubdistritosData,
    "color": "red",
    "nameColumn": "Nombre"
  },
  {
    "id": 3,
    "name": "comuna",
    "url": "http://192.168.105.219:6080/arcgis/rest/services/planificacion/limites/MapServer/2/query?where=Comuna+LIKE+%27%25%27&outFields=*&f=geojson",
    "src": ComunasImg,
    "data": ComunasData,
    "color": "purple",
    "nameColumn": "Comuna"
  },
  {
    "id": 4,
    "name": "educación",
    "url": "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/1/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    "src": EducacionImg,
    "data": EducacionData,
    "color": "blue",
    "nameColumn": "NOMBRE",
    "extraColumn": "DEPENDENCI"
  },
  {
    "id": 5,
    "name": "salud",
    "url": "http://192.168.105.219:6080/arcgis/rest/services/centros/centros/MapServer/0/query?where=NOMBRE+LIKE+%27%25%27&outFields=*&f=geojson",
    "src": SaludImg,
    "data": SaludData,
    "color": "green",
    "nameColumn": "NOMBRE",
    "extraColumn": "TIPO_ESTAB"
  }
]

export default ServicesData;