import React from 'react';

const BasketItem = ({ item, onDel,onMod }) => {
    const { id, title, author, bookcode } = item
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td><button className='modBtn' onClick={() => onMod(item)}>수정</button></td>
            <td><button className='delBtn' onClick={() => onDel(id)}>삭제</button></td>
        </tr>
    );
};

export default BasketItem;