import { createContext, useContext, useRef, useState } from "react";

export const TodoContext = createContext()

const TodosProvider = (props) => {
    const [data, setData] = useState(
        [
            { id: 1, text: '인공지능', isChk: true },
            { id: 2, text: '이산수학', isChk: false },
            { id: 3, text: '프로그래밍개론', isChk: true },
            { id: 4, text: '임베디드시스템', isChk: false },
            { id: 5, text: '컴퓨터네트워크', isChk: false },
        ]
    )

    const onDel = id => {
        setData(data.filter(item => item.id !== id))
    }
    const onToggle = id => {
        setData(data.map(item => item.id === id ?
            {
                ...item,
                isChk: !item.isChk
            }
            : item))
    }
    const no = useRef(data.length + 1)
    const [text, setText] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        if (!text) return
        setData(
            [
                ...data,
                {
                    id: no.current++,
                    text,
                    isChk: false
                }
            ]
        )
        setText('')
    }
    const changeInput = e => {
        setText(e.target.value)
    }
    return (
        <TodoContext.Provider value={{ data, onDel, onToggle, onSubmit, changeInput, text }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodosProvider;