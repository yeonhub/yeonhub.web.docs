import React from 'react';
import styled from 'styled-components'

const GalleryItemBox = styled.article`

`

const GalleryItem = ({ item }) => {
    const { previewURL, user, downloads, likes, views, tags } = item
    const tagsarr = tags.split(",")

    return (
        <GalleryItemBox>
            <img src={previewURL} alt='' />
            <h2>{user}</h2>
            <ul>
                <li>views : {views}</li>
                <li>downloads : {downloads}</li>
                <li>like : {likes}</li>
            </ul>
            <p>
                {
                    tagsarr.map((item, idx) => <span key={idx}>#{item} </span>)
                }

            </p>
        </GalleryItemBox>
    );
};

export default GalleryItem;