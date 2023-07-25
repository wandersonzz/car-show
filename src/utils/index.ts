import axios from 'axios'

export async function fetchCars() {
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: { model: 'corolla' },
    headers: {
      'X-RapidAPI-Key': 'ba6a527c3fmsh3e30747728379f0p1be49ajsn4db74447f647',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  }
  try {
    const response = await axios.request(options)

    const res = response.data
    console.log(res)

    return res
  } catch (error) {
    console.error(error)
  }
}

// eslint-disable-next-line camelcase
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50

  const mileageFactor = 0.1

  const ageFactor = 0.05

  // eslint-disable-next-line camelcase
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
