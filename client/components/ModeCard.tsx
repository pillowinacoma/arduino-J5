import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMode } from '../slices/app'
import { AppDispatch } from '../store'

interface ModeProps {
    mode?: Mode
}
const ModeCard: FC<ModeProps> = ({ mode }) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="bg-white p-8 bg-opacity-80 rounded-3xl flex space-x-12 items-center shadow-md hover:cursor-pointer transform transition hover:scale-125 duration-300 ease-out"
            onClick={() => dispatch(toggleMode())}
        >
            <div className='flex flex-col justify-center content-center'>
                <p className="text-7xl font-bold text-right text-gray-900">
                    {mode}
                </p>
                <p className="text-gray-500 text-sm ">Mode</p>
            </div>
        </div>
    )
}

export default ModeCard