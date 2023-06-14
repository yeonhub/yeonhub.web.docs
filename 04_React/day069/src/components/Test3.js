import React, { useState } from 'react';
import Test3Sub from './Test3Sub';

const dataList = [
    { id: 1, text: '1월' },
    { id: 2, text: '2월' },
    { id: 3, text: '3월' },
    { id: 4, text: '4월' }
]

const Test3 = () => {
    const [data, setData] = useState(dataList)

    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: data.length + 1,
                text: text
            }
        ])
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const onMod = (id) => {
        setData(data.map(item => item.id === id ? { ...item, text: '6월' } : item))
    }

    return (
        <div style={{ margin: 30 }}>
            <Test3Sub onAdd={onAdd} onDel={onDel} onMod={onMod} />
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test3;