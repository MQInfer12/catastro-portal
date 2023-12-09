import WMSLayer from "@arcgis/core/layers/WMSLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";

export type CatastroLayerType = "image" | "layer";

export interface CatastroLayer {
  name: string
  active: boolean
  src: string | null
  url: string
  type: CatastroLayerType
  data: WMSLayer | MapImageLayer | null
}