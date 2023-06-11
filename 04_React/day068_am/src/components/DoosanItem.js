import React from 'react';

const DoosanItem = ({item}) => {
    const {id, imgurl, no, name, position} = item
    return (
        <>
            <li data-id={id}>
                <img src={imgurl} alt={name}/>
                <p>
                    <em>{no}</em>
                    <strong>{position}</strong>
                </p>
                <span>{name}</span>
            </li>
        </>
    );
};

export default DoosanItem;