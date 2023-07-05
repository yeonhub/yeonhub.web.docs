import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state, action) => {
            action.payload ??= 1;
            state.counter += action.payload
        },
        minus: (state, action) => {
            action.payload ??= 1;
            state.counter -= action.payload
        },
    }
})
export const { plus, minus } = counterSlice.actions
export default counterSlice.reducer