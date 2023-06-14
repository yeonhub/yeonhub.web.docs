import React from 'react';

const TabItem = ({ item, on }) => {
    const { id, isShow, title } = item
    return (
        <li className={isShow ? 'on' : ''} onClick={() => on(id)}>
            {title}
        </li>
    );
};

export default TabItem;