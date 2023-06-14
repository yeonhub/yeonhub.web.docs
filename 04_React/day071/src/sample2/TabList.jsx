import React from 'react';
import TabItem from './TabItem';

const TabList = ({ data, on }) => {
    return (
        <ul>
            {
                data.map(item => <TabItem key={item.id} item={item} on={on} />)
            }
        </ul>
    );
};

export default TabList;