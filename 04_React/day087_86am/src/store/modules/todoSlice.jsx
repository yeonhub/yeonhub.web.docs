import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
    // id, text, isChk
    todoData: []
}
let no = 1
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todoData.push(
                {
                    id: no++,
                    text: action.payload,
                    isChk: false
                }
            )
        },
        delTodo(state, action) {
            state.todoData = state.todoData.filter(item => item.id !== action.payload)
        },
        toggleTodo(state, action) {
            const todoItem = state.todoData.find(item => item.id === action.payload)
            todoItem.isChk = !todoItem.isChk
        },
        changeInput(state, action) {
            state.text = action.payload
        },
    }
})

export const { addTodo, delTodo, toggleTodo, changeInput } = todoSlice.actions
export default todoSlice.reducer
