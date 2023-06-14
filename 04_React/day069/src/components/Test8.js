import React, { useRef, useState } from 'react';

const TodoItem = ({ item, onDel }) => {
    const { id, text } = item
    return (
        <li>
            {id} / {text} <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};
const Todolist = ({ data, onDel }) => {
    return (
        <ul>
            {
                data.map(item => <TodoItem key={item.id} item={item} onDel={onDel} />)
            }
        </ul>
    );
};
const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('')
    const textRef = useRef()
    const changeInput = (e) => {
        const { value } = e.target
        setText(value)
    }
    const add = () => {
        onAdd(text)
        setText('')
        textRef.current.focus()
    }
    return (
        <div>
            <input type="text" value={text} onChange={changeInput} ref={textRef}/>
            <button onClick={add}>확인</button>
        </div>
    );
};
const Test8 = () => {
    const [data, setData] = useState([
        { id: 1, text: '가렌' },
        { id: 2, text: '갈리오' },
        { id: 3, text: '갱플랭크' },
        { id: 4, text: '그라가스' }
    ])
    const no = useRef(5)

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text: text
            }
        ])
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    return (
        <div>
            <TodoInput onAdd={onAdd} />
            <Todolist data={data} onDel={onDel} />
        </div>
    );
};

export default Test8;