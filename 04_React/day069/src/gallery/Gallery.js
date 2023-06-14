import React, { useState } from 'react';
import './style.scss'
import '../assets/css/reset.css'
import dataList from '../assets/api/GalleryData'
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';

const Gallery = () => {
    const [data, setData] = useState(dataList)
    const [cat, setCat] = useState(data[0])

    const onPick = (id) => {
        setCat(data[id])
    }

    return (
        <div className='wrap'>
            <GalleryView data={data} cat={cat} onPick={onPick} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;