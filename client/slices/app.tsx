import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppState {
    temperature: number
    mode: Mode
    temperaturesHistory: TemperatureHistory[]
    devices: Devices
}

// Define the initial state using that type
const initialState: AppState = {
    temperature: 25,
    mode: 'off',
    temperaturesHistory: [],
    devices: {
        ac: false,
        heating: false,
    },
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTemperature: (state, action: PayloadAction<number>) => {
            state.temperature = action.payload
        },
        changeMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
        },
        setMode: {
            reducer: (state, action: PayloadAction<Mode>) => {
                // state.mode = action.payload
            },
            prepare(payload: Mode, propagate: boolean) {
                return {
                    payload: payload,
                    meta: { propagate },
                }
            },
        },
        toggleMode: (state) => {
            const modes: Mode[] = ['automatic', 'manual', 'off']
            const currModeIndex = modes.findIndex((e) => e === state.mode)
            const nextModeIndex = (currModeIndex + 1) % modes.length
            state.mode = modes.at(nextModeIndex) ?? state.mode
        },
        addTemperatureHistory: (
            state,
            action: PayloadAction<TemperatureHistory>
        ) => {
            state.temperaturesHistory.push(action.payload)
        },
        setAc: (state, action: PayloadAction<boolean>) => {
            state.devices.ac = action.payload
        },
        setHeating: (state, action: PayloadAction<boolean>) => {
            state.devices.heating = action.payload
        },
    },
})

export const {
    setTemperature,
    setMode,
    addTemperatureHistory,
    setAc,
    setHeating,
    changeMode,
} = app.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.slidesApp.value

export default app.reducer
