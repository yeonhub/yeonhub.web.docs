import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus(state) {
            state.counter += 1
        },
        minus(state) {
            state.counter -= 1
        },
    }
})
export const { plus, minus } = counterSlice.actions

export default counterSlice.reducer