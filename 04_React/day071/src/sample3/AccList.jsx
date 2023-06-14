import React from 'react';
import AccItem from './AccItem';

const AccList = ({data,isOn}) => {
    return (
        <dl>
            {
                data.map(item=><AccItem key={item.id} item={item} isOn={isOn}/>)
            }
        </dl>
    );
};

export default AccList;