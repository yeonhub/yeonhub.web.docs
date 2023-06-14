import React from 'react';
import DoosanImg from './DoosanImg';
import DoosanMenu from './DoosanMenu';
import DoosanCon from './DoosanCon';

const DoosanInfo = ({ imgshow }) => {
    return (
        <div className='info'>
            <DoosanImg imgshow={imgshow} />
            <DoosanMenu />
            <DoosanCon />
        </div>
    );
};

export default DoosanInfo;