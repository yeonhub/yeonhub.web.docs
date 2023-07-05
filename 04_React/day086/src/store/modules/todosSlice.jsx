import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    subject: "과목",
    // data: [
    //     { id: 1, text: '인공지능', isChk: false },
    //     { id: 2, text: '객체지향프로그래밍', isChk: true },
    //     { id: 3, text: 'C프로그래밍', isChk: false },
    //     { id: 4, text: '정보보호', isChk: true },
    //     { id: 5, text: '웹프로그래밍', isChk: true },
    // ]
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [
        { id: 1, text: '인공지능', isChk: false },
        { id: 2, text: '객체지향프로그래밍', isChk: true },
        { id: 3, text: 'C프로그래밍', isChk: false },
        { id: 4, text: '정보보호', isChk: true },
        { id: 5, text: '웹프로그래밍', isChk: true },
    ]
}
let no = 6
export const todosSlide = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // state.data = [
            //     ...state.data,
            //     {
            //         id: no++,
            //         subject: action.payload,
            //         isChk: false
            //     }
            // ]
            state.data.push({id:no++, text : action.payload, isChk : false})
            localStorage.setItem('data',JSON.stringify(state.data))
    
        },
        delTodo: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
            localStorage.setItem('data',JSON.stringify(state.data))
        },
        toggleTodo: (state, action) => {
            state.data = state.data.map(item => item.id === action.payload ? { ...item, isChk: !item.isChk } : item)
            localStorage.setItem('data',JSON.stringify(state.data))
        },
        changeInput: (state, action) => {
            state.text = action.payload
        },
    },
}
)

export const { delTodo, toggleTodo, changeInput, addTodo } = todosSlide.actions;
export default todosSlide.reducer;