import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ item }) => {
    return (
        <li style={{ padding: 15, border: "1px solid black", marginBottom: 15 }}>
            <form>
                <input type="checkbox" />
                <span>
                    {item.text}
                </span>
                <b><Link to="">수정</Link></b>
                <button>삭제</button>
            </form>
        </li>
    );
};

export default UserItem;