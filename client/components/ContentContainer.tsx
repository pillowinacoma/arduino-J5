import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import ModeCard from './ModeCard'

const ContentContainer = () => {
    const [temp, setTemp] = useState('')
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [current_mode, setCurrent_mode] = useState('')

    useEffect(() => {
        axios.get(`/weather`).then((res) => {
            setTemp(res.data.temp)
            setIcon(res.data.icon)
            setDescription(res.data.description)
            setCity(res.data.city)
        })
        axios.get(`/current_mode`).then((res) => {
            setCurrent_mode(res.data.current_mode)
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
                    <ModeCard
                        name="Mode économie d'énergie"
                        description="Le mode économie d'énergie, alternera l'activité du chauffage et de la climatisation toutes les 5 secondes. De plus la fenêtre de température utilisé pour la régulation sera plus grande."
                        button_position="justify-start"
                        is_current_mode={
                            current_mode === "Mode économie d'énergie"
                                ? true
                                : false
                        }
                        setCurrent_mode={setCurrent_mode}
                    />
                    <ModeCard
                        name="Mode activé"
                        description="Le mode économie d'énergie, alternera l'activité du chauffage et de la climatisation toutes les 5 secondes. De plus la fenêtre de température utilisé pour la régulation sera plus granLe mode activé, s'occupera d'allumer le chauffage ou la climatisation pour réguler la température en fonction de la température extérieur.de."
                        button_position="justify-center"
                        is_current_mode={
                            current_mode === 'Mode activé' ? true : false
                        }
                        setCurrent_mode={setCurrent_mode}
                    />
                    <ModeCard
                        name="Mode vacances"
                        description="Le mode vacances quant à lui, désactivera le chauffage et la climatisation. Ce mode pourra être activé ou désactivé en actionnant un bouton."
                        button_position="justify-end"
                        is_current_mode={
                            current_mode === 'Mode vacances' ? true : false
                        }
                        setCurrent_mode={setCurrent_mode}
                    />
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContentContainer
