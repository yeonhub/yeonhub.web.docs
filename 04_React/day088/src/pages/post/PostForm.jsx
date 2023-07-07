import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../store/modules/postSlice';

const PostForm = () => {
    const [txt, setTxt] = useState('')
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        dispatch(search(txt))
        setTxt('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={txt} onChange={e => setTxt(e.target.value)} />
        </form>
    );
};

export default PostForm;