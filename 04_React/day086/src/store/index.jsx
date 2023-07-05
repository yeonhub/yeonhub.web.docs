import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/countSlice'
// import colorReducer from './modules/colorSlice'
import color from './modules/colorSlice'
import changeColorReducer from './modules/changeColorSlice'
import counterReducer from './modules/counterSlice'
import todosReducer from './modules/todosSlice'

export const store = configureStore({
    reducer: {
        countR: countReducer,
        // colorR: colorReducer,
        color,
        changeColorR: changeColorReducer,
        counterR: counterReducer,
        todosR: todosReducer
    }
})