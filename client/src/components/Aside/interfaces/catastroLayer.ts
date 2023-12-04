import WMSLayer from "@arcgis/core/layers/WMSLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";

export interface CatastroLayer {
  name: string
  active: boolean
  src: string
  data: WMSLayer | MapImageLayer
}