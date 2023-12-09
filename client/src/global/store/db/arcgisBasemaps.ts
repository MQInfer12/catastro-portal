import BMGris from "../../../assets/images/basemaps/gris.png";
import BMGrisOscuro from "../../../assets/images/basemaps/gris-oscuro.png";
import BMSatelite from "../../../assets/images/basemaps/satelite.png";
import BMSateliteHibrido from "../../../assets/images/basemaps/satelite-hibrido.png";
import BMOpenStreet from "../../../assets/images/basemaps/openstreet.png";
import BMOpenStreetVector from "../../../assets/images/basemaps/streets-vector.png";
import BMOpenStreetVectorOscuro from "../../../assets/images/basemaps/streets-vector-oscuro.png";
import BMOpenStreetNavigation from "../../../assets/images/basemaps/streets-navigation-vector.png";
import BMTopo from "../../../assets/images/basemaps/topo-vector.png";
import BMOpenStreetRelief from "../../../assets/images/basemaps/streets-relief-vector.png";
import BMTopo3D from "../../../assets/images/basemaps/topo-3d.png";
import BMNavigation3D from "../../../assets/images/basemaps/navigation-3d.png";
import { writable } from "svelte/store";

export const arcgisBasemaps = writable([
  {
    src: BMGris,
    name: "Gris",
    basemap: "gray-vector"
  },
  {
    src: BMGrisOscuro,
    name: "Gris oscuro",
    basemap: "dark-gray-vector"
  },
  {
    src: BMSatelite,
    name: "Satélite",
    basemap: "satellite"
  },
  {
    src: BMSateliteHibrido,
    name: "Satélite híbrido",
    basemap: "hybrid"
  },
  {
    src: BMOpenStreet,
    name: "Open Street Maps",
    basemap: "osm"
  },
  {
    src: BMOpenStreetVector,
    name: "Open Street",
    basemap: "streets-vector"
  },
  {
    src: BMOpenStreetVectorOscuro,
    name: "Open Street oscuro",
    basemap: "streets-night-vector"
  },
  {
    src: BMOpenStreetNavigation,
    name: "Open Street navegación",
    basemap: "streets-navigation-vector"
  },
  {
    src: BMTopo,
    name: "Topo",
    basemap: "topo-vector"
  },
  {
    src: BMOpenStreetRelief,
    name: "Open Street relieve",
    basemap: "streets-relief-vector"
  },
  {
    src: BMTopo3D,
    name: "Topo 3D",
    basemap: "topo-3d"
  },
  {
    src: BMNavigation3D,
    name: "Navegación 3D",
    basemap: "navigation-3d"
  }
])