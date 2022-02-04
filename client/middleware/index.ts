import { AnyAction, Dispatch, Middleware } from 'redux'
import * as io from 'socket.io-client'
import { addTemperatureHistory, setMode, setTemperature } from '../slices/app'
import { store } from '../store'

const socket = io.connect()

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
    store.dispatch(
        addTemperatureHistory({
            time: new Date(),
            value,
        })
    )
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
                    socket.emit('toggleMode', {
                        mode: store.getState().mode,
                    })
                    break
                case 'setMode':
                    socket.emit('setMode', {
                        mode: store.getState().mode,
                    })
                    break
                case 'setAc':
                    socket.emit('setAc', {
                        value: payload
                    })
                    break
                case 'setHeating':
                    socket.emit('setHeating', {
                        value: payload
                    })
                    break
            }
        }

        return next(action)
    }
