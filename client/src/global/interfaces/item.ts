export interface Comuna {
  OBJECTID: number
  Comuna: string
  Hectares: number
  Shape_Length: number
  Shape_Area: number
}

export interface Distrito {
  OBJECTID: number
  distrito: number
  comuna: string
  Nombre: string
  Shape_Area: number
  FID: number
  Shape_Leng: number
}

export interface Educacion {
  OBJECTID: number
  CICLOS: string
  NOMBRE: string
  DEPENDENCI: string
}

export interface Salud {
  OBJECTID: number
  NOMBRE: string
  TIPO: string
  SUB_SECTOR: string
  NIVEL: string
  TIPO_ESTAB: string
  Prueba: string
}

export interface Subdistrito {
  OBJECTID: number
  Nombre: string
  Shape_Length: number
  Shape_Area: number
}