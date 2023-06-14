import React, { useState } from 'react';
import Test7Sub from './Test7Sub';
import movieList from '../assets/api/movies'
import '../assets/css/reset.css'
import './Test7.scss'


const Test7 = () => {
    const [data, setData] = useState(movieList)
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    return (
        <div className='wrap'>
            {
                data.map(item => <Test7Sub key={item.id} item={item} onDel={onDel}/>)
            }
        </div>
    );
};

export default Test7;