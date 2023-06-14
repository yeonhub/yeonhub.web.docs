import React, { useState } from 'react';
import dataList from '../assets/api/accdata'
import AccList from './AccList';
import './style.scss'

const Acc = () => {
    const [data, setData] = useState(dataList)
    const [show, setShow] = useState(data[0])
    const isOn = id => {
        setShow(data.find(item => item.id === id))
        setData(data.map(item => item.id === id ? { ...item, on: true } : { ...item, on: false }))
    }
    return (
        <div className='wrap'>
            <AccList data={data} isOn={isOn}/>
        </div>
    );
};

export default Acc;