import { configureStore } from "@reduxjs/toolkit";
import todo from './modules/todoSlice'
import user from './modules/userSlice'
import post from './modules/postSlice'

export const store = configureStore({
    reducer: {
        todo,
        user,
        post,
    }
})
