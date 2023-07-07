import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers',
    async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data
        } catch (error) {
            console.log('--- ERROR-- -');
        }
    })

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
}
)

// export const { } = userSlice.actions
export default userSlice.reducer