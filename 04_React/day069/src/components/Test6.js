import React, { useRef, useState } from 'react';

const Test6 = () => {
    const textRef = useRef(null)
    const no = useRef(1)

    const [data, setData] = useState([])
    const [user, setUser] = useState({
        text: '',
        age: ''
    })
    const { text, age } = user

    const changeInput = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                text: text,
                age: age
            }
        ])
        textRef.current.focus()
    }
    const onReset = () => { }

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <div style={{ margin: 30 }}>
            <p>
                <input type="text" placeholder='이름' value={text} name='text' onChange={changeInput} ref={textRef} />
                <input type="text" placeholder='나이' value={age} name='age' onChange={changeInput} />
                <button onClick={onAdd}>추가</button>
                <button onClick={onReset}>초기화</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text} / {item.age}<button onClick={()=>onDel(item.id)}>삭제</button></li>)
                }
            </ul>
        </div>
    );
};

export default Test6;