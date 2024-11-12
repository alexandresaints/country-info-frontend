import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CountryContext } from '../context/Country'
import { Country } from '../pages/Country'

export const Routers = () => {
  const getCountries = useContext(CountryContext)
  const { countries } = getCountries

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {countries.map((item) => {
        return (
          <Route
            element={
              <Country name={item.name} codeCountry={item.countryCode} flag={item.flag} />
            }
            path={`/${item.countryCode}`}
          />
        )
      })}
    </Routes>
  )
}
