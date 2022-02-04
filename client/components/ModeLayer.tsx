import { useEffect, useState } from 'react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setMode } from '../slices/app'
import { AppDispatch } from '../store'
import { useAppSelector } from '../hooks'


interface WeatherProps {
    name: Mode
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
}) => {

    const current_mode = useAppSelector(
        (state) => state.mode
    )

    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="p-6">
            <div className="m-6 indicator">
                {(name === current_mode) && <div className="indicator-item badge badge-secondary"></div>}
                <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
                        <input type="checkbox"/>
                        <div className="collapse-title w-full font-bold text-xl text-gray-800 px-6">
                            {name}. <br/>
                        </div> 
                        <div className="collapse-content text-gray-800"> 
                            {description}
                        </div>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className={`flex items-center ${button_position}`}>
                            <button
                                className={`mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${(name === current_mode) ? "disable-button": ""}`}
                                onClick={() => {
                                    dispatch(setMode(name))
                                }}
                            >
                                Activer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModeCard
