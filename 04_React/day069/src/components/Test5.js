import React, { useRef, useState } from 'react';

const Test5 = () => {
    const [data, setData] = useState([])
    const no = useRef(1)
    const names = '김,이,박,최,정,민,송,전,임,하'.split(',')
    const onAdd = () => {
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id : no.current ++,
                text : names[ran]
            }
        ])
    }
    return (
        <div>
            <h2>고유번호처리</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={data.id}>{item.id} / {item.text}</li>)
                }
            </ul>
        </div>
    );
};

export default Test5;