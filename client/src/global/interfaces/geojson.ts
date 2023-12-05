export interface GeoJSON {
  type: string
  crs: Crs
  features: Feature[]
}

export interface Crs {
  type: string
  properties: Properties
}

export interface Properties {
  name: string
}

export interface Feature {
  type: string
  id: number
  geometry: GeometryPolygon | GeometryPoint | null
  properties: Properties2
}

export interface Properties2 {
  OBJECTID: number
  [key: string]: any
}

export interface GeometryPolygon {
  type: "Polygon"
  coordinates: number[][][]
}

export interface GeometryPoint {
  type: "Point"
  coordinates: number[]
}