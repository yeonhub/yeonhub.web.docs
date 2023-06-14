import React from 'react';

const GalleryBig = ({cat}) => {
    const {imgurl, title} = cat
    return (
        <div className='bigimg'>
            <img src={imgurl} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default GalleryBig;