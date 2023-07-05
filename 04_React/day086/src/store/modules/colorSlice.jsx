import { createSlice } from '@reduxjs/toolkit'

const initialState = { color: 'orange' }

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        onRed(state) {
            state.color = 'red'
        },
        onGreen(state) {
            state.color = 'green'
        },
        onBlue(state) {
            state.color = 'blue'
        },
    }
})

export const { onRed, onGreen, onBlue } = colorSlice.actions

// 전부 내보내기
export default colorSlice.reducer