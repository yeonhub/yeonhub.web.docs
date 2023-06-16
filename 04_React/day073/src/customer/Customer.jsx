import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';

const dataList = [
    { id: 1, name: '김', addr: '서울특별시' },
    { id: 2, name: '이', addr: '부산광역시' },
    { id: 3, name: '박', addr: '경기도 수원시' },
    { id: 4, name: '최', addr: '강원도 태백시' },
    { id: 5, name: '윤', addr: '경기도 성남시' },
]

const Customer = () => {
    // localStorage.clear();
    const [data, setData] = useState(
        () => JSON.parse(localStorage.getItem('data')) || dataList
    );
    const no = useRef(data.length + 1)
    const [isShow, setIsShow] = useState(false)
    const [edit, setEdit] = useState({})
    const [isMsg, setIsMsg] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    const onEdit = (item) => {
        setIsShow(true)
        setEdit(item)
    }
    const onDel = id => {
        setData(data.filter(item => item.id !== id))
    }
    const onAdd = user => {
        user.id = no.current++
        setData([
            ...data,
            user
        ])
        setIsMsg(true)
        setMsg('추가 완료')
    }
    const onUpdate = (user) => {
        setData(data.map(item => item.id === user.id ? user : item))
    }
    return (
        <div className='Customer'>
            {
                isShow ? <EditUser edit={edit} setIsShow={setIsShow} onUpdate={onUpdate} /> : <AddUser onAdd={onAdd} />
            }
            <Message msg={msg} isMsg={isMsg} setIsMsg={setIsMsg}/>

            <ListUser data={data} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;