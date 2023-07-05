import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const { changeInput, text, onAdd } = useUser()
    const navigate = useNavigate()
    const onSubmit = e => {
        e.preventDefault()
        if (!text.trim()) return
        onAdd(text)
        navigate('/')
    }
    return (
        <>
            <h2>과목 추가</h2>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={changeInput} />
                <button type='submit'>추가</button>
            </form>
        </>
    );
};

export default AddUser;