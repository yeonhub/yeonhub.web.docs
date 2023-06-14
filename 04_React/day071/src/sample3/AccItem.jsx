import React from 'react';

const AccItem = ({item,isOn}) => {
    const {id, title, subtitle, txt} = item
    return (
        <>
            <dt className={item.on && 'on'} onClick={()=>isOn(id)}>{title}</dt>
            <dd className={item.on && 'on'}>
                <h3>{subtitle}</h3>
                <p>{txt}</p>
            </dd>
        </>
    );
};

export default AccItem;