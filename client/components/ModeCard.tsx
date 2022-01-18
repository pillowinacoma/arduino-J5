import { useEffect, useState } from 'react'
import { FC } from 'react'
import axios from 'axios'

interface WeatherProps {
    name: string
    description: string
    button_position: string
    is_current_mode?: boolean
    setCurrent_mode: (req_mode: string) => void
}
const ModeCard: FC<WeatherProps> = ({
    name,
    description,
    button_position,
    is_current_mode = false,
    setCurrent_mode,
}) => {
    function changeCurrentMode(req_mode: string) {
        axios.post(`/current_mode`, { req_mode }).then((res) => {
            setCurrent_mode(req_mode)
        })
    }
    return (
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
                        {name}
                        {is_current_mode && <b> (Mode actuel) </b>}.
                    </div>
                    <p className="text-gray-800 text-base px-6 mb-5">
                        {description}
                    </p>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className={`flex items-center ${button_position}`}>
                    <button
                        className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        onClick={() => {
                            changeCurrentMode(name)
                        }}
                    >
                        Activer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModeCard
