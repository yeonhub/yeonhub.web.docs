import React, { useState } from 'react';
import '../assets/css/reset.css'
import './Main.scss'
import DoosanList from './DoosanList';
import dataList from '../assets/api/DoosanData';
import imgList from '../assets/api/DoosanImgData';
import DoosanInfo from './DoosanInfo';

const Main = () => {
    const [data, setData] = useState(dataList)
    const [imgdata, setImgsata] = useState(imgList)
    const [imgshow, setImgShow] = useState(imgList[0])
    const [select, setSelect] = useState(53)

    const onSelect =(id)=>{
        setSelect(id)
    }

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
                        <DoosanInfo imgshow={imgshow} setSelect={setSelect}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;