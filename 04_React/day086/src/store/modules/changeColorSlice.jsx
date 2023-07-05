import { createSlice } from "@reduxjs/toolkit";

const initialState = { color: 'tomato' }
export const changeColorSlice = createSlice({
    name: 'changeColor',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            // action의 key값을 받는 것은 payload 고정
            state.color = action.payload
        }
    }
})

export const { changeColor } = changeColorSlice.actions
export default changeColorSlice.reducer