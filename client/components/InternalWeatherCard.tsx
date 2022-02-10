import { useEffect, useState } from 'react'
import { FC } from 'react'

interface WeatherProps {
    temp: string
    icon: string
    description: string
    city: string
}
const InternalWeatherCard: FC<WeatherProps> = ({
    temp,
    icon,
    description,
    city,
}) => {
    return (
        <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
            <div>
                <img
                    src="http://localhost/h.png"
                    alt="weather status icon"
                    className="h-32"
                />

                <p className="text-center text-gray-500 mt-2 text-sm">
                    Température intérieure
                </p>
            </div>
            <div>
                <p className="text-7xl font-bold text-right text-gray-900">
                    {temp}°
                </p>
            </div>
        </div>
    )
}

export default InternalWeatherCard
