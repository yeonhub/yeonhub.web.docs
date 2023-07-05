import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Test6 = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <div>
            <h1>posts data list</h1>
            {
                !loading && !error && <img src="./images/all.jpg" alt="loading" />
            }

            {
                error && <img src='./images/18.jpg' alt='error' />
            }
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id} / {item.title} </li>)
                }
            </ul>
        </div>
    );
};

export default Test6;