import React from 'react';
import styled from 'styled-components'

const GalleryItemBox = styled.article`
margin-bottom:40px;
box-shadow:5px 5px 10px #efefef;
padding:15px 15px 35px; 
border:1px solid #efefef;
img { width:100% }
h2 { font-size:25px;  color:hotpink; margin-bottom:15px; text-transform:uppercase; }
ul { margin-bottom:20px;
    li { margin-bottom:5px }
}
p {
    span {
        display:inline-block; padding:3px 20px; border-radius:15px; 
        background:#efefef; margin-right:5px; 
    }
}
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