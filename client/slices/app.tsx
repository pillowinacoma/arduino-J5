import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppState {
    temperature: number,
    mode: Mode
}

// Define the initial state using that type
const initialState: AppState = {
    temperature: 0,
    mode: 'automatic'
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
            const currModeIndex = modes.findIndex(e => e === state.mode)
            const nextModeIndex = (currModeIndex + 1) % modes.length
            state.mode = modes.at(nextModeIndex) ?? state.mode
        }
    },
})

export const {
    setTemperature,
    setMode,
    toggleMode
} = app.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.slidesApp.value

export default app.reducer
