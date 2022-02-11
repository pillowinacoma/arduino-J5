import { AnyAction, Dispatch, Middleware } from 'redux'
import * as io from 'socket.io-client'
import {
    addTemperatureHistory,
    changeMode,
    setMode,
    setTemperature,
} from '../slices/app'
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
socket.on('message', (message) => {
    console.log(message)
})
socket.on('order', (data) => {
    const { type, params } = data
    console.log('skjhvslkjvhb', params)
    switch (type) {
        case 'chmode':
            store.dispatch(changeMode(params.mode))
            break
    }
})

export const actionMiddleware: Middleware<Dispatch> =
    () => (next) => (action: AnyAction) => {
        const { meta, type, payload } = action
        const [sliceName, reducer] = type.split('/')

        if (sliceName === 'app') {

            switch (reducer) {
                case 'toggleMode':
                    socket.emit('toggleMode', {
                        mode: store.getState().mode,
                    })
                    break
                case 'setMode':
                    socket.emit('setMode', {
                        mode: payload,
                    })
                    break
                case 'setAc':
                    socket.emit('setAc', {
                        value: payload,
                    })
                    break
                case 'setHeating':
                    socket.emit('setHeating', {
                        value: payload,
                    })
                    break
            }
        }

        return next(action)
    }
