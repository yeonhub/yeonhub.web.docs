import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 1,
    color: 'tan',
    colors: ['lightblue', 'lightcoral', 'lightgreen', 'lightpink', 'lightsalmon', 'lightgray'],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += 1
        },
        decrement(state, action) {
            state.count -= 1
        },
        changeColor(state, action) {
            state.color = action.payload
        },
    }
})

export const { increment, decrement, changeColor } = counterSlice.actions
export default counterSlice.reducer