import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';

const Container = styled.div`
    width: ${props => props.width};
    margin: auto;
`

const Gallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('text')
    const [keyword, setKeyword] = useState(text)

    const onSubmit = () => {
        
    }
    const changeInput = () => {

    }

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
    }, [])

    return (
        <Container width="1400px">
            <GallerySearch />
            <GalleryList data={data} onSubmit={onSubmit} changeInput={changeInput} />
        </Container>
    );
};

export default Gallery;