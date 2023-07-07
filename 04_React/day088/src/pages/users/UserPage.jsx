import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UserPage = () => {
    const { userId } = useParams()
    const { users } = useSelector(state => state.user)

    const navigate = useNavigate()
    const onGo = () => {
        navigate('/user')
    }

    const userItem = users.find(item => item.id === Number(userId))
    const { id, name, email } = userItem
    return (
        <div>
            <h2>{id}번 - {name}</h2>
            <h2>{email}</h2>
            <button onClick={onGo}>목록으로</button>
        </div>
    );
};

export default UserPage;