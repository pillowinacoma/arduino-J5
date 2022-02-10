import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import StatsCard from './StatsCard'
import { useAppSelector } from '../hooks'
import ModeLayer from './ModeLayer'
const ContentContainer = () => {
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')

    const [current_mode, setCurrent_mode] = useState('')

    useEffect(() => {
        axios.get(`/weather`).then((res) => {
            setIcon(res.data.icon)
            setDescription(res.data.description)
            setCity(res.data.city)
        })
        axios.get(`/current_mode`).then((res) => {
            setCurrent_mode(res.data.current_mode)
        })
    }, [])

    const temperature = useAppSelector((state) => state.temperature)
    const mode = useAppSelector((state) => state.mode)

    return (
        <React.Fragment>
            <div className="pt-24 flex flex-col md:flex-row  ">
                <section className="container mx-auto items-center py-6 mb-12 justify-center content-list">
                    <WeatherCard
                        temp={`${temperature}`}
                        icon={icon}
                        description={description}
                        city={city}
                    />
                </section>
            </div>
            <section className="bg-white border-b py-8">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Chauffage autonome
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <ModeLayer
                            name="manual"
                            description="Le mode économie d'énergie, alternera l'activité du chauffage et de la climatisation toutes les 5 secondes. De plus la fenêtre de température utilisé pour la régulation sera plus grande."
                            is_current_mode={
                                current_mode === "Mode économie d'énergie"
                            }
                            setCurrent_mode={setCurrent_mode}
                        />
                        <ModeLayer
                            name="automatic"
                            description="Le mode activé, lorsque l'utilisateur est dans la maison, s'occupera d'allumer le chauffage ou la climatisation pour réguler la température en fonction de la température extérieur. Le chauffage s'activera en dessous de 20°C et la climatisation au dessus de 25°C pour garder une température intérieur ambiante correcte."
                            is_current_mode={current_mode === 'Mode activé'}
                            setCurrent_mode={setCurrent_mode}
                        />
                        <ModeLayer
                            name="off"
                            description="Le mode vacances quant à lui, désactivera le chauffage et la climatisation. Ce mode pourra être activé ou désactivé en actionnant un bouton."
                            is_current_mode={current_mode === 'Mode vacances'}
                            setCurrent_mode={setCurrent_mode}
                        />
                    </div>
                </div>
            </section>
            <StatsCard />
            <svg
                viewBox="0 0 1439 147"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                >
                    <g
                        transform="translate(-1.000000, -14.000000)"
                        fill-rule="nonzero"
                    >
                        <g className="wave" fill="#f8fafc">
                            <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                        </g>
                        <g
                            transform="translate(1.000000, 15.000000)"
                            fill="#FFFFFF"
                        >
                            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                <path
                                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                    opacity="0.100000001"
                                ></path>
                                <path
                                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                    opacity="0.100000001"
                                ></path>
                                <path
                                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                    opacity="0.200000003"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
}

export default ContentContainer
