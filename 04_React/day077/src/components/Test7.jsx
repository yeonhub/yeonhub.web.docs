import React from 'react';
import { useFetch2 } from '../hooks/useFetch2';
import { useAxios } from '../hooks/useAxios';

const Test7 = () => {
    const {data, loading, error} = useAxios('https://jsonplaceholder.typicode.com/posts')
    return (
        <div>
            <h1>posts data list</h1>
            {
                !loading && !error && <img src="./images/all.jpg" alt="loading" />
            }
            {
                error && <img src='./images/18.jpg' alt='error'/>    
            }
            <ul>
                {
                    data.map(item=> <li key={item.id}>{item.id} / {item.title} </li>)
                }
            </ul>
        </div>
    );
};

export default Test7;