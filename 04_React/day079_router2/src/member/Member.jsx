import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({ item }) => {
    const css = {
        border: '1px solid tan',
        padding: 10,
        margin: 20
    }
    console.log(item);
    return (
        <div style={css}>
            <p>Id : {item.id}</p>
            <h3>Name : {item.name} </h3>
            <h4>E-mail : {item.email}</h4>
            <p><Link to="">more +</Link></p>
            <button>more</button>

        </div>
    );
};

export default Member;