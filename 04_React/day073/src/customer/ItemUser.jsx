import React from 'react';

const ItemUser = ({ item,onDel,onEdit }) => {
    const { id, name, addr } = item
    return (
        <tr>
            <td>{name}</td>
            <td>{addr}</td>
            <td>
                <button onClick={()=>onEdit(item)}>수정</button>
                <button onClick={() => onDel(id)}>삭제</button>
            </td>
        </tr>
    );
};

export default ItemUser;