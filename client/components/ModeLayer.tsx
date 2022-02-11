import { useEffect, useState } from 'react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setAc, setHeating, setMode } from '../slices/app'
import { AppDispatch } from '../store'
import { useAppSelector } from '../hooks'

interface WeatherProps {
    name: Mode
    description: string
    current_mode?: string
    icon?: string
}

const ModeCard: FC<WeatherProps> = ({
    name,
    description,
    current_mode,
    icon,
}) => {
    const cm = useAppSelector((state) => state.mode)

    const dispatch = useDispatch<AppDispatch>()
    const ac = useAppSelector((state) => state.devices.ac)
    const heating = useAppSelector((state) => state.devices.heating)
    const mode = useAppSelector((state) => state.mode)

    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <img src={icon} width={50} height={50} className="mb-4 pt-4" />

            <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden indicator items-center">
                <div
                    className={`indicator-item badge badge-secondary ${
                        cm === name ? '' : 'indicator-item-disable'
                    }`}
                ></div>
                <div className="flex flex-col flex-grow flex-shrink ">
                    <div className="collapse border rounded-box border-base-300 collapse-arrow">
                        <input type="checkbox" />
                        <div className="collapse-title w-full font-bold text-xl text-gray-800 px-6">
                            {current_mode}. <br />
                        </div>
                        <div className="collapse-content text-gray-800">
                            {description}
                        </div>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-4">
                        <div className={`flex items-center justify-center`}>
                            {cm === 'manual' && cm === name && (
                                <button
                                    className={`mx-auto lg:mx-0 hover:underline ${
                                        ac ? 'froid' : 'neutral'
                                    } text-white font-bold py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                                    onClick={() =>
                                        mode == 'manual' && dispatch(setAc(!ac))
                                    }
                                >
                                    Froid
                                </button>
                            )}
                            <button
                                className={`flex mx-auto text-white bg-blueweather border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
                                    name === cm
                                        ? 'opacity-50 cursor-not-allowed'
                                        : ''
                                }`}
                                onClick={() => {
                                    dispatch(setMode(name, true))
                                    console.log(name)
                                }}
                            >
                                Activer
                            </button>
                            {cm === 'manual' && cm === name && (
                                <button
                                    className={`mx-auto lg:mx-0 hover:underline ${
                                        heating ? 'chaud' : 'bg-blueweather'
                                    } text-white font-bold py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out `}
                                    onClick={() =>
                                        mode == 'manual' &&
                                        dispatch(setHeating(!heating))
                                    }
                                >
                                    Chaud
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModeCard
