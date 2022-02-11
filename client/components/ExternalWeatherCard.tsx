import { useEffect, useState } from 'react'
import { FC } from 'react'
import TempIcon from '../images/icons/temp-icon.svg'

interface WeatherProps {
    temp: string
    icon: string
}
const ExternelWeatherCard: FC<WeatherProps> = ({ temp, icon }) => {
    return (
        <div className="bg-white p-10 rounded-3xl flex flex-col md:flex-row  items-center shadow-xl">
            <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className="h-32 w-32 pr-4"
            />

            <div className="flex flex-col">
                <p className="text-7xl pt-4 font-bold text-center md:text-right text-blueweather">
                    {temp}°
                </p>
                <p className=" text-black font-semibold">
                    Température extérieure
                </p>
            </div>
        </div>
    )
}

export default ExternelWeatherCard
