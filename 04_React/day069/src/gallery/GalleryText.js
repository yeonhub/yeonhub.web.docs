import React from 'react';

const GalleryText = ({cat}) => {
    const {title, desc} = cat
    return (
        <div className='text'>
            <strong>{title}</strong>
            <p>{desc}</p>
        </div>
    );
};

export default GalleryText;