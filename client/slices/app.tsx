import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppState {
    temperature: number
}

// Define the initial state using that type
const initialState: AppState = {
    temperature: 0
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTemperature: (state, action: PayloadAction<number>) => {
            state.temperature = action.payload
        },
    },
})

export const {
    setTemperature
} = app.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.slidesApp.value

export default app.reducer
