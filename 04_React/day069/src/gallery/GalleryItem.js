import React from 'react';

const GalleryItem = ({ item, onPick }) => {
    const {id, imgurl, title } = item
    return (
        <li key={id} onClick={()=>onPick(id)}>
            <img src={imgurl} alt={title}/>
        </li>
    );
};

export default GalleryItem;