import { AnyAction, Dispatch, Middleware } from 'redux'
import * as io from 'socket.io-client'
import { setMode, setTemperature } from '../slices/app'
import { store } from '../store'

const socket = io.connect()
const useTrickle = true

socket.on('connect', () => {
    socket.send({
        type: 'device',
        value: 'client',
    })
    console.log(`connected ${socket.id}`)
})

socket.on('temperature', (msg) => {
    const { value } = msg
    store.dispatch(setTemperature(value))
})
socket.on('button', () => {
    console.log('button clicked')
})
socket.on('order', (data) => {
    console.log('CHMOD')
    const { type, params } = data
    switch (type) {
        case 'chmode':
            store.dispatch(setMode(params.mode))
            break
    }
})

export const actionMiddleware: Middleware<Dispatch> =
    () => (next) => (action: AnyAction) => {
        const { meta, type, payload } = action
        const [sliceName, reducer] = type.split('/')

        if (sliceName === 'app') {
            const message = JSON.stringify({
                type: reducer,
                payload,
            })

            switch (reducer) {
                case 'toggleMode':
                    socket.emit('changeMode', {
                        mode: store.getState().mode,
                    })
                    break
                case 'setMode':
                    break
            }
        }

        return next(action)
    }
