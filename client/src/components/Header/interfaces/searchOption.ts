import type { ColorType } from "../../../global/interfaces/colorType"

export interface SearchOption {
  id: number
  text: string
  small: string
  searchBy: string
  type: string
  color: ColorType
}