import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Main.scss'
import DoosanList from './DoosanList';
import dataList from '../assets/api/DoosanData';

const Main = () => {
    const [data, setData] = useState(dataList)
    return (
        <div>
            <div id='wrap'>
                <div id='content'>
                    <div className='inner'>
                        <div className='img'>
                            {/* <img className='emblem' src='./images/OBemblem.png' alt='' /> */}
                            <img className='logo' src='./images/doosanlogo.png' alt='' />
                        </div>
                        <DoosanList data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;