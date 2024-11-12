import api from '../services/api'

export const GetCountries = async () => {
  try {
    const response = await api.get(`/`)
    return response
  } catch (error) {
    console.error(error.request._response)
  }
}
export const GetCountry = async (country) => {
  try {
    const response = await api.get(`/country/${country}`)
    return response
  } catch (error) {
    console.error(error.request._response)
  }
}
