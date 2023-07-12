import { configureStore } from "@reduxjs/toolkit";
import notice  from './modules/noticeSlice'
import customer  from './modules/customerSlice'


export const store = configureStore({
    reducer: {
        notice,
        customer
    }
    
})