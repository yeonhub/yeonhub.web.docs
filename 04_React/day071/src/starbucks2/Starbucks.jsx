import React, { useState } from 'react';
import './style.scss'
import dataList from '../assets/api/starbucksData'
import MenuList from './MenuList';
import StarList from './StarList';

const menus = ['all', ...new Set(dataList.map(item => item.name))]

const Starbucks = () => {
    const [data, setData] = useState(dataList)
    const [menu, setMenu] = useState(menus)

    const onShow = (name) => {
        if (name === 'all') {
            setData(dataList)
        } else {
            setData(dataList.filter(item => item.name === name))
        }
    }

    return (
        <div className='starbucks'>
            <h1>starbucks Menu</h1>
            <MenuList menu={menu} onShow={onShow} />
            <StarList data={data} />
        </div>
    );
};

export default Starbucks;