/* eslint-disable camelcase */
'use client'

import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'

type CarCardProps = {
  car: CarProps
}

export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, driver } = car

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
    </div>
  )
}
