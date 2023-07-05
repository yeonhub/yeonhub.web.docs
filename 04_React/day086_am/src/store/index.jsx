import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counterSlice'
import colorReducer from './modules/colorListSlice'

export const store = configureStore({
    reducer: {
        counterR: counterReducer,
        colorR: colorReducer
    }
})