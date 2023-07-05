import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { name } = useParams()

    return (
        <div className='page'>
            <h2>Project : {name}</h2>
            {/* {
                data.filter(item => item.title === name).map((item,idx)=> <div key={idx}><h3>{item.title}</h3><h4>{item.info}</h4></div>)
            } */}
        </div>
    );
};

export default Project;