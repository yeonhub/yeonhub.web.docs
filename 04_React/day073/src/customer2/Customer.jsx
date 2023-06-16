import React, { useRef } from 'react';
import { useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

const dataList = [
    { id: 1, name: '김', addr: '서울특별시' },
    { id: 2, name: '이', addr: '부산광역시' },
    { id: 3, name: '박', addr: '경기도 수원시' },
    { id: 4, name: '최', addr: '강원도 태백시' },
    { id: 5, name: '윤', addr: '경기도 성남시' },
]

const Customer = () => {
    const [data, setData] = useState(dataList)
    const no = useRef(data.length + 1)
    const [isShow, setIsShow] = useState(false)
    const [edit, setEdit] = useState({})

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
    }
    const onUpdate = (user) => {
        setData(data.map(item => item.id === user.id ? user : item))
    }
    return (
        <div className='Customer'>
            {
                isShow ? <EditUser edit={edit} setIsShow={setIsShow} onUpdate={onUpdate} /> : <AddUser onAdd={onAdd} />
            }

            <ListUser data={data} onDel={onDel} onEdit={onEdit} />
        </div>
    );
};

export default Customer;