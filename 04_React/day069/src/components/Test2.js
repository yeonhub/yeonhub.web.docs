import React, { useState } from 'react';

const dataList = [
    { id: 1, name: '김' },
    { id: 2, name: '이' },
    { id: 3, name: '박' },
    { id: 4, name: '최' },
    { id: 5, name: '정' }
]

const Test2 = () => {
    const [data, setData] = useState(dataList)

    const onDel1 = () => {
        setData(data.filter(item => item.name !== '김'))
    }
    const onDel2 = () => {
        setData(data.filter(item => item.name !== '이'))
    }
    const onDel3 = () => {
        setData(data.filter(item => item.name !== '박'))
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }


    const onAdd1 = () => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: '윤'
            }
        ])
    }
    const onAdd2 = () => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: '소'
            }
        ])
    }
    const onAdd3 = () => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: '진'
            }
        ])
    }
    const onAdd = (name) => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: name
            }
        ])
    }
    const onMod1 = () => {
        setData(data.map(item => {
            if (item.id === 3) {
                return { ...item, name: '황' }
            } else {
                return item
            }
        }))
    }
    const onMod2 = () => {
        setData(data.map(item => item.id === 4 ? { ...item, name: '조' } : item))
    }
    const onMod = (id) => {
        const newData = data.map(item => item.id === id ? { ...item, name: '양' } : item)
        setData(newData)
    }

    return (
        <div>
            <h2>추가 , 삭제 , 수정</h2>
            <p>
                <button onClick={onDel1}>김 삭제</button>
                <button onClick={onDel2}>이 삭제</button>
                <button onClick={onDel3}>박 삭제</button>
                <button onClick={() => onDel(4)}>최 삭제</button>
                <button onClick={() => onDel(5)}>정 삭제</button>
            </p>
            <p>
                <button onClick={onAdd1}>윤 추가</button>
                <button onClick={onAdd2}>소 추가</button>
                <button onClick={onAdd3}>진 추가</button>
                <button onClick={() => onAdd('반')}>반 추가</button>
                <button onClick={() => onAdd('추')}>추 추가</button>
            </p>
            <p>
                <button onClick={onMod1}>수정</button>
                <button onClick={onMod2}>수정</button>
                <button onClick={() => onMod(5)}>수정</button>
            </p>
            <ul>
                {data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)}
            </ul>
        </div>
    );
};

export default Test2;   