import { createSlice } from '@reduxjs/toolkit'

const noticeData = [
    { id: 1, title: '게시글 1번 제목', content: '게시글 1번 내용', date: '2023-06-01' },
    { id: 2, title: '게시글 2번 제목', content: '게시글 2번 내용', date: '2023-06-02' },
    { id: 3, title: '게시글 3번 제목', content: '게시글 3번 내용', date: '2023-06-03' },
    { id: 4, title: '게시글 4번 제목', content: '게시글 4번 내용', date: '2023-06-04' },
    { id: 5, title: '게시글 5번 제목', content: '게시글 5번 내용', date: '2023-06-05' },
]

const initialState = {
    data: noticeData
}

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {

    }
})

// export const { } = noticeSlice.actions
export default noticeSlice.reducer