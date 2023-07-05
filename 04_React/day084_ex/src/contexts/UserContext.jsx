import { createContext, useContext, useMemo, useReducer } from "react";
import { UserReducer } from "./UserReducer";

const initialState = {
    data: [
        { id: 1, text: '이산수학', isChk: false },
        { id: 2, text: '운영체제', isChk: false },
        { id: 3, text: '자료구조', isChk: false },
        { id: 4, text: '논리회로', isChk: false },
        { id: 5, text: '컴퓨터구조', isChk: false },
    ]
}

// 관리자 생성
const UserContext = createContext()
export const useUser = () => useContext(UserContext)

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const { data } = state

    // 추가
    const onAdd = text => {
        dispatch({ type: 'ADD', playload: text })
    }
    // 삭제
    const onDel = () => {
        dispatch({})
    }
    const onToggle = () => {

    }
    const onEdit = () => {

    }
    const value = useMemo(() => ({ data, onToggle, onAdd, onDel, onEdit }), [data, onToggle, onAdd, onDel, onEdit])

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;