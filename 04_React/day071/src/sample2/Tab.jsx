import React, { useState } from 'react';
import dataList from '../assets/api/tabdata'
import './style.scss'
import TabList from './TabList';
import TabContent from './TabContent';

const Tab = () => {
    const [data, setData] = useState(dataList)
    const [show, setShow] = useState(data[0])
    const on = id => {
        // setShow(data[id-1])
        setShow(data.find(item => item.id === id))
        setData(data.map(item => item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }))
    }

    return (
        <div className='tabs'>
            <TabList data={data} on={on} />
            <TabContent show={show} />
        </div>
    );
};

export default Tab;