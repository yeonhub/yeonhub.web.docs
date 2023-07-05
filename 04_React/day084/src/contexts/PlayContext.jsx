import { createContext, useReducer } from "react";

export const PlayContext = createContext()
const initalState = { isChk: false }
const reducer = (state, action) => {
    const { type } = action
    switch (type) {
        case 'TRUE':
            return {
                // 값이 하나인 경우엔 생략 가능
                ...state,
                isChk: true
            }
        case 'FALSE':
            return {
                // 값이 하나인 경우엔 생략 가능
                ...state,
                isChk: false
            }
        case 'TOGGLE':
            return {
                // 값이 하나인 경우엔 생략 가능
                ...state,
                isChk: !state.isChk
            }
        default:
            return state
    }
}

const PlayProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initalState)
    const { isChk } = state
    return (
        <PlayContext.Provider value={{ isChk, dispatch }}>
            {props.children}
        </PlayContext.Provider>
    );
};

export default PlayProvider;