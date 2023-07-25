import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyle?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SeatchManuFacturerProps {
  manufacturer: string
  setMenufacturer: (manufacturer: string) => void
}

export type CarProps = {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  driver: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}
