import React from 'react';
import DoosanItem from './DoosanItem';

const DoosanList = ({data}) => {
    return (
        <>
            <ul className='list'>
                {
                    data.map(item => <DoosanItem key={item.id} item={item} />)
                }
            </ul>
        </>
    );
};

export default DoosanList;