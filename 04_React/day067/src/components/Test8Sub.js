import React from 'react';

const Test8Sub = ({ item }) => {
    const {id, name, age, addr, done} = item
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}세</td>
            <td>{addr}</td>
            <td>{done?'동의':'비동의'}</td>
        </tr>
    );
};

export default Test8Sub;