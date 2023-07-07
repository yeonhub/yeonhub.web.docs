import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    text: 'apple',
    post: [],
    loading: true,
    state: null,
}

export const getPost = createAsyncThunk('posts/getPost',
async (text) => {
        try {
            const res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${text}`)
            return res.data.hits
        } catch (error) {
            console.log('--- POST ERROR-- -');
        }
    })


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        search(state, action) {
            state.text = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getPost.pending, (state, action) => {
                state.state = 'loading'
                state.loading = true
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.state = 'fulfilled'
                state.loading = false
                state.post = action.payload
            })
            .addCase(getPost.rejected, (state, action) => {
                state.state = 'rejected'
                state.loading = true
            })
    }
})

export const { search } = postSlice.actions
export default postSlice.reducer