import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { Container } from '../styled/galleryStyle'
import GalleryKeywords from './GalleryKeywords';

const GalleryListContainer = styled.div`
    .my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}

`

const Gallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')
    const [keyword, setKeyword] = useState('tiger')
    const [keywordArr, setKeywordArr] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return
        setKeywordArr([
            ...keywordArr,
            {
                id: keywordArr.length + 1,
                text
            }
        ])
        setKeyword(text)
        setText('')
    }
    const changeInput = (e) => {
        setText(e.target.value)
    }
    const onDel = id => { setKeywordArr(keywordArr.filter(item => item.id !== id)) }

    useEffect(() => {
        const API_KEY = '36039320-c68a09919d89ffbf64dc4bb64'
        const url = `https://pixabay.com/api/?key=36039320-c68a09919d89ffbf64dc4bb64&q=${keyword}&image_type=photo`
        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(true)
                setError(null)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError('-- ERROR --')
            })
    }, [keyword])

    return (
        <Container width="1400px">
            <GallerySearch onSubmit={onSubmit} changeInput={changeInput} text={text} />
            <GalleryKeywords keywordArr={keywordArr} onDel={onDel} />
            <GalleryList data={data} />
        </Container>
    );
};

export default Gallery;