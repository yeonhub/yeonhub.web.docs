import { createSlice } from '@reduxjs/toolkit'

// 모든 상태를 관리

const initialState = { cnt: 0 }

export const countSlice = createSlice({
    name: 'count',
    initialState ,
    reducers: {
        onUp: (state) => {
            state.cnt += 1
        },
        onDown: (state) => {
            state.cnt -= 1
        },
        onReset: (state) => {
            state.cnt = 0
        }
    }
})

// 밖으로 전달
export const { onUp, onDown, onReset } = countSlice.actions
export default countSlice.reducer