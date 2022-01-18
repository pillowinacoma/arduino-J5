import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'

const ContentContainer = () => {
    const [temp, setTemp] = useState('')
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        axios.get(`/weather`).then((res) => {
            setTemp(res.data.temp)
            setIcon(res.data.icon)
            setDescription(res.data.description)
            setCity(res.data.city)
        })
    }, [])

    return (
        <React.Fragment>
            <div className="pt-24">
                <section className="container mx-auto items-center py-6 mb-12 justify-center content-list">
                    <WeatherCard
                        temp={temp}
                        icon={icon}
                        description={description}
                        city={city}
                    />
                </section>
            </div>

            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Chauffage autonome
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a
                                href="#"
                                className="flex flex-wrap no-underline hover:no-underline"
                            >
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                    xGETTING STARTED
                                </p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Mode économie.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Le mode économie d'énergie, alternera
                                    l'activité du chauffage et de la
                                    climatisation toutes les 5 secondes. De plus
                                    la fenêtre de température utilisé pour la
                                    régulation sera plus grande.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-start">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Activer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a
                                href="#"
                                className="flex flex-wrap no-underline hover:no-underline"
                            >
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                    xGETTING STARTED
                                </p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Le mode activé, s'occupera d'allumer le
                                    chauffage ou la climatisation pour réguler
                                    la température en fonction de la température
                                    extérieur.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Activer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a
                                href="#"
                                className="flex flex-wrap no-underline hover:no-underline"
                            >
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                    xGETTING STARTED
                                </p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Le mode vacances quant à lui, désactivera le
                                    chauffage et la climatisation. Ce mode
                                    pourra être activé ou désactivé en
                                    actionnant un bouton.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-end">
                                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Activer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContentContainer
