import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return res.data
    }
)

const initialState = {
    todos: [],
    loading: true,
    state: null,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                state.state = 'loading'
                state.loading = true
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.state = 'fulfilled'
                state.loading = false
                state.todos = action.payload
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.state = 'rejected'
                state.loading = true
            })
    }
})

export default todoSlice.reducer