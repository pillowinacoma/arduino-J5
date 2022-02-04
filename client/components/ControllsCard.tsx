import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMode } from '../slices/app'
import { AppDispatch } from '../store'

interface ModeProps {
    mode?: Mode
}
const ControllsCard: FC<ModeProps> = ({ mode }) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md">
            <div className="flex flex-col justify-center content-center">
                <p className="text-7xl font-bold text-right text-gray-900">
                    {mode}
                </p>
                <p className="text-gray-500 text-sm ">Mode</p>
            </div>
            <div className={`flex items-center justify-center}`}>
                <button
                    className="mx-auto lg:mx-0 hover:underline froid text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    onClick={() => console.log('HELLO')}
                >
                    Froid
                </button>
                <button
                    className="mx-auto lg:mx-0 hover:underline chaud text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    onClick={() => console.log('HELLO')}
                >
                    Chaud
                </button>
            </div>
        </div>
    )
}

export default ControllsCard
