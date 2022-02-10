import { useEffect, useState } from 'react'
import { FC } from 'react'

import ThermometerCold from '../images/icons/thermometer_cold.svg'
import ThermometerHot from '../images/icons/thermometer_hot.svg'

interface WeatherProps {
    temp: number
}
const InternalWeatherCard: FC<WeatherProps> = ({ temp }) => {
    return (
        <div className="bg-white p-10 rounded-3xl flex flex-col md:flex-row  items-center shadow-xl">
            <img
                src={temp > 20 ? ThermometerHot : ThermometerCold}
                alt="weather status icon"
                className="h-32 w-32 pr-4"
            />

            <div className="flex flex-col">
                <p className="text-7xl pt-4 font-bold text-center md:text-right text-blueweather">
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
