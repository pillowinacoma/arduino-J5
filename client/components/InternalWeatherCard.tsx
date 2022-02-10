import { useEffect, useState } from 'react'
import { FC } from 'react'
import TempIcon from '../images/icons/temp-icon.svg'

interface WeatherProps {
    temp: string
}
const InternalWeatherCard: FC<WeatherProps> = ({ temp }) => {
    return (
        <div className="bg-white p-10 rounded-3xl flex flex-row  items-center shadow-xl">
            <img
                src={TempIcon}
                alt="weather status icon"
                className="h-32 w-32 pr-4"
            />

            <div className="flex flex-col">
                <p className="text-7xl pt-4 font-bold text-right text-blueweather">
                    {temp}°
                </p>
                <p className=" text-black font-semibold">
                    Température intérieure
                </p>
            </div>
        </div>
    )
}

export default InternalWeatherCard
