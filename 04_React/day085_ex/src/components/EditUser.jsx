import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const EditUser = () => {
    const navigate = useNavigate()
    const { data, onEdit } = useUser();
    const { editID } = useParams();
    const [current, setCurrent] = useState({ id: '', text: '', isChk: null });
    const { text } = current;

    useEffect(() => {
        const currentData = data.find(item => item.id === Number(editID));
        if (currentData) {
            setCurrent(currentData);
        }
    }, [editID, data]);

    const changeInput = e => {
        const { name, value } = e.target
        setCurrent({
            ...current,
            [name]: value
        }
        )
    }
    const onSubmit = e => {
        e.preventDefault()
        if (!text) return
        onEdit(current)
        navigate('/')
    }

    return (
        <>
            <h2>{editID}번 과목 변경</h2>
            <form style={{ padding: "20px 0" }} onSubmit={onSubmit}>
                <input type="text" value={text} name='text' onChange={changeInput}/>
                <button type='submit'>수정</button>
                <b><Link to="/">취소</Link></b>
            </form>
        </>
    );
};

export default EditUser;
