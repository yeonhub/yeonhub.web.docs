import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ data, onPick }) => {
    return (
        <ul>
            {
                data.map(item => <GalleryItem key={item.id} item={item} onPick={onPick}/>)
            }
        </ul>
    );
};

export default GalleryList;