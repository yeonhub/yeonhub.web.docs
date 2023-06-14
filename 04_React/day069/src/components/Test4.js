import React, { useState } from 'react';

const Test4 = () => {
    const [data, setData] = useState([])
    const onAdd = () => {
        const ran = Math.floor(Math.random() * 10000)
        setData([
            ...data,
            {
                id: data.length + 1,
                text: '김' + ran
            }
        ])
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const onMod = (id) => {
        setData(data.map(item => item.id === id ? { ...item, text: '최' } : item))
    }

    return (
        <div>
            <p>
                <button onClick={onAdd}>추가</button>
                <button onClick={() => onDel(1)}>삭제</button>
                <button onClick={() => onMod(2)}>수정</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test4;