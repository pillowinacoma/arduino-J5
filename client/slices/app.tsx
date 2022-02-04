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
    temperature: 0,
    mode: 'automatic',
    temperaturesHistory: [],
    devices: {
        ac: false,
        heating: false,
    }
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTemperature: (state, action: PayloadAction<number>) => {
            state.temperature = action.payload
        },
        setMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
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
        }
    },
})

export const { setTemperature, setMode, toggleMode, addTemperatureHistory, setAc, setHeating } =
    app.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.slidesApp.value

export default app.reducer
