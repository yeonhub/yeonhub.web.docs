import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate()

const initialState = {
    data: [
        { id: 1, title: '문의글 1번', name: '김만득', content: '1번 문의 내용', date: '2023-07-01' },
        { id: 2, title: '문의글 2번', name: '김만득', content: '2번 문의 내용', date: '2023-07-02' },
        { id: 3, title: '문의글 3번', name: '김만득', content: '3번 문의 내용', date: '2023-07-03' },
        { id: 4, title: '문의글 4번', name: '김만득', content: '4번 문의 내용', date: '2023-07-04' },
    ],
    user: {}
}
let no = 2

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        add(state, action) {
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() + 1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            let dateString = year + '-' + month + '-' + day;

            const newItem = {
                id: state.data.length + 1,
                date: dateString,
                ...action.payload,
            };
            state.data.push(newItem)
        },
        remove(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload)

            state.data = state.data.map(item => item.id > action.payload ?
                {
                    ...item,
                    id: item.id - 1
                }
                :
                item)
        },
        edit(state, action) { },
    }
})

export const { add, remove, edit } = customerSlice.actions
export default customerSlice.reducer