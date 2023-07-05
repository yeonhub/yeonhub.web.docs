import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const UserItem = ({ item }) => {
    const { id, text, isChk } = item
    const { onDel, onToggle } = useUser()
    return (
        <li style={{ padding: 15, border: "1px solid black", marginBottom: 15 }}>
            <form>
                <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
                <span>
                    {text}
                </span>
                <b><Link to={`/edit/${id}`}>수정</Link></b>
                <button onClick={() => onDel(id)}>삭제</button>
            </form>
        </li>
    );
};

export default UserItem;