import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks'
import { setAc, setHeating } from '../slices/app'
import { AppDispatch } from '../store'

const ControllsCard: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const ac = useAppSelector((state) => state.devices.ac)
    const heating = useAppSelector((state) => state.devices.heating)
    const mode = useAppSelector((state) => state.mode)

    return (
        <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
            <div className="flex flex-col justify-center content-center">
                <p className="text-gray-500 text-sm ">Controleurs</p>
            </div>
            <div className={`flex items-center justify-center}`}>
                <button
                    className={`mx-auto lg:mx-0 hover:underline ${ ac && "froid"} text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                    onClick={() => mode == 'manual' && dispatch(setAc(!ac))}
                >
                    Froid
                </button>
                <button
                    className={`mx-auto lg:mx-0 hover:underline ${heating && "chaud"} text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out `}
                    onClick={() =>
                        mode == 'manual' && dispatch(setHeating(!heating))
                    }
                >
                    Chaud
                </button>
            </div>
        </div>
    )
}

export default ControllsCard
