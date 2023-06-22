import React, { useEffect, useMemo, useState } from 'react';

const user = [
    { id: 1, name: '김' },
    { id: 2, name: '이' },
    { id: 3, name: 'naver' },
    { id: 4, name: '윤' },
    { id: 5, name: 'Google' },
    { id: 6, name: 'amazon' },
    { id: 7, name: '소' },
    { id: 8, name: '조' },
    { id: 9, name: 'vsCode' },
    { id: 10, name: '지' },
]

const Test5 = () => {
    const [text, setText] = useState('')
    
    const data = useMemo(()=>{
        return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    },[text])

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <hr />
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test5;