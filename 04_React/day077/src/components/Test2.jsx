import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                data: [],
                loading: true,
                error: null
            }
        case "SUCCESS":
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case "ERROR":
            return {
                data: [],
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const Test2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, loading, error } = state

    const getData = async () => {
        // 로딩
        dispatch({ type: 'LOADING' })
        try {
            // 성공
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({ type: 'SUCCESS', data:res.data })
        }
        catch (error) {
            // 실패
            dispatch({ type: 'ERROR', error : error})
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) return <div>--- loading ---</div>
    if (error) return <div>--- error ---</div>
    if (!data) return null

    return (
        <div>
            {
                data.map(item => <p key={item.id}>{item.id} / {item.title}</p>)
            }
        </div>
    );
};

export default Test2;