import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({ data, onDel, onMod }) => {
    return (
        <table className='book-table'>
            <caption>도서 관리 시스템</caption>
            <colgroup>
                <col className='title' />
                <col className='author' />
                <col className='bookcode' />
                <col className='del' />
            </colgroup>
            <thead>
                <tr>
                    <th>장르</th>
                    <th>저자</th>
                    <th>코드</th>
                    <th colSpan={2}>관리</th>
                </tr>
            </thead>
            <tbody className='book-tbody'>
                {
                    data.map(item => <BasketItem key={item.id} item={item} onDel={onDel} onMod={onMod} />)
                }
            </tbody>
        </table>
    );
};

export default BasketList;