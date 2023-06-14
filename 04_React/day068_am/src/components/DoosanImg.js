import React from 'react';

const DoosanImg = ({ imgshow }) => {
    const { no, tn1, tn2, tn3 } = imgshow;

    return (
        <div className='gallery'>
            <img className='bigimg' src={tn1} alt="" />
            <ul>
                <li><img className='tn' src={tn1} alt="" /></li>
                <li><img className='tn' src={tn2} alt="" /></li>
                <li><img className='tn' src={tn3} alt="" /></li>
            </ul>
        </div>
    );
};

export default DoosanImg;