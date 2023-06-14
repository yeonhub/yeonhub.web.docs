import React from 'react';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const GalleryView = ({ data, cat, onPick }) => {
    return (
        <div className='bigview'>
            <GalleryBig cat={cat} />
            <GalleryList data={data} onPick={onPick}/>
        </div>

    );
};

export default GalleryView;