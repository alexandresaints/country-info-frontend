import React, { useContext, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import countriesBackground from '../../assets/images/world.png'
import { CountryContext } from '../../context/Country'
import loadingGif from '../../assets/images/loading.webp'


export const Home = () => {
    const { countries, isLoading } = useContext(CountryContext)
    const [search, setSearch] = useState('')

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className='flex flex-col mt-[60px] justify-center items-center'>
                <img src={countriesBackground} className='w-[150px]' alt='a country background' />
                <h1 className='text-gray-600 text-[34px] font-regular'>Choice one country</h1>

                <div className="mt-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search country..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="bg-white p-4 mt-[30px] flex justify-center items-center">
                    {isLoading ? (
                        <img src={loadingGif} alt='loading' width={60} />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredCountries.map((item) =>
                                item.flag && (
                                    <Link
                                        to={item.countryCode}
                                        key={item.countryCode}
                                        className='flex flex-row justify-between items-center gap-6 px-12 py-4 shadow'
                                    >
                                        <div className='flex flex-row items-center gap-2'>
                                            <img
                                                src={item.flag}
                                                className='w-10'
                                                alt={`Flag of ${item.name}`}
                                                loading="lazy"
                                            />
                                            <h1 className="text-center text-lg font-light">{item.name}</h1>
                                        </div>
                                        <MdArrowForwardIos size={16} />
                                    </Link>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
