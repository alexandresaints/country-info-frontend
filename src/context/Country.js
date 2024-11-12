import { createContext, useEffect, useState } from 'react'
import { GetCountries, GetCountry } from '../business/CountryBusiness'

export const CountryContext = createContext()

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [countryCode, setCountryCode] = useState(null)

    const fetchCountries = async () => {
        try {
            const response = await GetCountries()
            setCountries(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    const fetchCountryData = async (countryCode) => {
        try {
            const response = await GetCountry(countryCode)
            setCountry(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    useEffect(() => {
        if (countryCode) {
            fetchCountryData(countryCode)
        }
    }, [countryCode])

    return (
        <CountryContext.Provider
            value={{
                countries,
                country,
                isLoading,
                setCountryCode
            }}
        >
            {children}
        </CountryContext.Provider>
    )
}
