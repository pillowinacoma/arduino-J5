import { useEffect, useState } from 'react'
import { FC } from 'react'

interface WeatherProps {
    temp: string
    icon: string
    description: string
    city: string
}
const ExternelWeatherCard: FC<WeatherProps> = ({
    temp,
    icon,
    description,
    city,
}) => {
    return (
        <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
            <div>
                <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="weather status icon"
                    className="h-32 w-32"
                />

                <p className="text-center text-gray-500 mt-2 text-sm">
                    Température extérieure
                </p>
            </div>
            <div>
                <p className="text-7xl font-bold text-right text-gray-900">
                    {temp}°
                </p>
                <p className="text-gray-500 text-sm">{city}</p>
            </div>
        </div>
    )
}

export default ExternelWeatherCard
