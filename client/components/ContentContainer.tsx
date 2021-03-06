import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ExternalWeatherCard from './ExternalWeatherCard'
import InternalWeatherCard from './InternalWeatherCard'
import StatsCard from './StatsCard'
import { useAppSelector } from '../hooks'
import ModeCard from './ModeCard'
import Footer from './Footer'
import ActiveIcon from '../images/icons/active.svg'
import EconomyIcon from '../images/icons/economy.svg'
import VacanceIcon from '../images/icons/vacance.svg'

const ContentContainer = () => {
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [temp, setTemp] = useState(0)

    useEffect(() => {
        axios.get(`/weather`).then((res) => {
            setIcon(res.data.icon)
            setDescription(res.data.description)
            setCity(res.data.city)
            setTemp(Math.round(res.data.temp))
        })
    }, [])

    const temperature = useAppSelector((state) => state.temperature)
    const mode = useAppSelector((state) => state.mode)

    return (
        <React.Fragment>
            <div className="bg-weather bg-cover bg-bottom p-8 md:p-40">
                <h1 className="text-center text-5xl font-bold">Smart Room</h1>
                <p className="text-center text-md">
                    Bienvenu sur l'interface de gestion* Smart Room*.
                </p>
                <div
                    className="flex md:space-x-4 flex-col md:flex-row container mx-auto items-center p-6 mb-12 justify-center content-list
                    "
                >
                    {mode != 'off' && (
                        <InternalWeatherCard temp={Number(temperature)} />
                    )}

                    <ExternalWeatherCard temp={`${temp}`} icon={icon} />
                </div>
            </div>
            <section className="bg-white border-b py-8">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-blueweather">
                        Chauffage autonome
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <ModeCard
                            name="manual"
                            description="Le mode manuel, permet de contrôler le chauffage manuellement."
                            current_mode="Mode manuel"
                            icon={ActiveIcon}
                        />
                        <ModeCard
                            name="automatic"
                            description="Le mode activé, s'occupera d'allumer le chauffage ou la climatisation pour réguler la température en fonction de la température interieur. Le chauffage s'activera en dessous de 20°C et la climatisation au dessus de 25°C pour garder une température intérieur ambiante correcte."
                            current_mode="Mode activé"
                            icon={EconomyIcon}
                        />
                        <ModeCard
                            name="off"
                            description="Le mode vacances quant à lui, désactivera le chauffage et la climatisation. Ce mode pourra être activé ou désactivé en actionnant un bouton."
                            current_mode="Mode vacances"
                            icon={VacanceIcon}
                        />
                    </div>
                </div>
            </section>
            <StatsCard />
            <Footer />
        </React.Fragment>
    )
}

export default ContentContainer
