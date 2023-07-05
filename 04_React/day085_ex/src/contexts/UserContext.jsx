import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { UserReducer } from "./UserReducer";

const initialState = {
    text: '',
    data: localStorage.getItem('data') ?
        JSON.parse(localStorage.getItem('data'))
        :
        [
            { id: 1, text: '이산수학', isChk: false },
            { id: 2, text: '운영체제', isChk: true },
            { id: 3, text: '자료구조', isChk: false },
            { id: 4, text: '논리회로', isChk: true },
            { id: 5, text: '컴퓨터구조', isChk: false },
        ]
}

// 관리자 생성
const UserContext = createContext()
export const useUser = () => useContext(UserContext)

const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const { data, text } = state
    const no = useRef(data.length + 1)

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const onAdd = text => {
        dispatch({ type: 'ADD', text, id: no.current++ })
    }
    const onDel = (id) => {
        dispatch({ type: 'DEL', id })
    }
    const onToggle = (id) => {
        dispatch({ type: 'TOGGLE', id })
    }
    const onEdit = (current) => {
        dispatch({ type: 'EDIT', current })
    }
    const changeInput = e => {
        const { value } = e.target
        dispatch({ type: 'CHANGE_INPUT', text: value })
    }

    const value = useMemo(() => ({ data, onToggle, onAdd, onDel, onEdit, changeInput, text }), [data, onToggle, onAdd, onDel, onEdit, changeInput, text])

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;