import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ item }) => {
    const { id, name, email } = item
    return (
        <li>
            <Link to={`/user/${id}`}>{id} / {name} / {email} </Link>
        </li>
    );
};

export default UserItem;