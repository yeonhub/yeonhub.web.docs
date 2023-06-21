import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/yeonhub/7551d24f5d86a7b93227f8f7216ca61b/raw/a3b7f6777e990af0d46d804c7ed60038086cf4dc/gistfile1.txt')
            .then(res => setData(res.data))
    }, [])

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}> {item.id} / {item.text} </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;