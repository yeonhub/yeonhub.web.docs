import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: 'black',
    colorData: [
        { id: 1, color: 'lightblue', opacity: 1 },
        { id: 2, color: 'lightcoral', opacity: 1 },
        { id: 3, color: 'lightgreen', opacity: 1 },
        { id: 4, color: 'lightpink', opacity: 1 },
        { id: 5, color: 'lightsalmon', opacity: 1 },
        { id: 6, color: 'lightyellow', opacity: 1 },
    ],
    colorData2: [
    ]
};
let no = 1
export const colorListSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        onColor(state, action) {
            state.color = action.payload;
            console.log(state.color);
        },
        addColor(state, action) {
            state.colorData2.push(
                { id: no++, text: action.payload, opacity: 1 }
            )
            console.log(state.colorData2);
        },
        changeInput(state, action) {
            state.text = action.payload
        },
    }
});

export const { onColor, changeInput, addColor } = colorListSlice.actions;
export default colorListSlice.reducer;
