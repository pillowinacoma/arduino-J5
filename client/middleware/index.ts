import { AnyAction, Dispatch, Middleware } from 'redux'
import * as io from 'socket.io-client'
import { setTemperature } from '../slices/app'
import { store } from '../store'

const socket = io.connect()
const useTrickle = true

socket.on('connect', () => {
    console.log(`connected ${socket.id}`)
})

socket.on('temperature', (msg) => {
    const { value } = msg
    store.dispatch(setTemperature(value))
})
socket.on('button', () => {
    console.log('button clicked')
})

export const actionMiddleware: Middleware<Dispatch> =
    () => (next) => (action: AnyAction) => {
        const { meta, type, payload } = action
        const [sliceName, reducer] = type.split('/')

        if (meta?.propagate) {
            if (sliceName === 'board') {
                const message = JSON.stringify({
                    type: reducer,
                    payload,
                })

                switch (reducer) {
                    case 'movePlayer':
                        break
                    case 'setAvatar':
                        break
                }
            }
        }

        return next(action)
    }
