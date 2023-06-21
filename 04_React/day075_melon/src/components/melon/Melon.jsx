import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../styled/Melon.scss';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import styled from 'styled-components'
import { Container } from '../styled/MelonStyle';

const Melon = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const [data, setData] = useState([])
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')

    useEffect(() => {
        const url = 'https://gist.githubusercontent.com/yeonhub/11d05736cc7e42fdd02a6513f48b625f/raw/671728422e1bfec698c85e7109745a046e010ae9/gistfile1.json'
        axios.get(url)
            .then(res => {
                setData(res.data)
                setDataList(res.data)
                setLoading(true)
                setError(null)
            })
            .catch(error => {
                setData([])
                setLoading(false)
                setError('-- ERROR --')
            })
    }, [])

    const onLike = id => {
        setData(data.map(item => item.id === id ? { ...item, like: !item.done ? item.like + 1 : item.like - 1, done: !item.done } : item))
    }
    const onSearch = text => {
        setData(dataList.filter(item => item.title.indexOf(text) !== -1))
    }
    const changeInput = e=>{
        const {value} = e.target
        setText(value)
    }
    const onSubmit=e=>{
        e.preventDefault()
        onSearch(text)
    }

    return (
        <Container className='Melon'>
            <h2>Melon {year}.{month}.{day} 인기차트</h2>
            <MelonForm onSearch={onSearch} changeInput={changeInput} onSubmit={onSubmit} />
            <MelonList data={data} onLike={onLike} />
        </Container>
    );
};

export default Melon;
