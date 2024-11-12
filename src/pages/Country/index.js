import React, { useContext, useEffect } from 'react'
import { CountryContext } from '../../context/Country'
import { Chart } from '../../components/Chart'
import { Link } from 'react-router-dom'
import loadingGif from '../../assets/images/loading.webp'

export const Country = ({ name, codeCountry, flag }) => {
    const { setCountryCode, country, isLoading } = useContext(CountryContext)

    useEffect(() => {
        setCountryCode(codeCountry)
    }, [codeCountry, setCountryCode])

    return (
        <>
            <div className="px-4 py-6 md:px-8 lg:px-16">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">{name}</h1>
                    <img
                        src={flag}
                        alt={name}
                        className="w-24 sm:w-32 lg:w-40 mx-auto mb-8 mt-4"
                    />
                </div>

                <div className='mx-auto text-center mb-[4vh]'>
                    <h1 className='text-center text-2xl font-semibold mb-4'>Border´s countries</h1>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {country?.countryInfo?.borders?.map((item, index) => (
                            <Link to={`/${item.countryCode}`}>
                                <h1 key={index} className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm font-light text-center">
                                    {item.commonName}
                                </h1>
                            </Link>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <img src={loadingGif} alt='loading' width={60} />
                ) : (
                    country?.populationInfo?.populationCounts ? (
                        <Chart isLoading={isLoading} country={country} name={name} />
                    ) : (
                        <p className="text-center text-lg">No population data available</p>
                    )
                )}

                <div className="text-center mt-8">
                    <Link to="/">
                        <a className="text-blue-500 hover:underline text-lg"> {'<'} Back to all countries</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
