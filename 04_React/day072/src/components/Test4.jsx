import React from 'react';
import Test4Sub from './Test4Sub';
import { useState } from 'react';

const Test4 = () => {
    const [isShow, setIsShow] = useState(false)
    const onShow=()=>{
        setIsShow(!isShow)
    }
    return (
        <div>
            <p>
                <button onClick={onShow}>SHOW / HIDE</button>
            </p>
            {
                isShow ? <Test4Sub/> : null
            }
            
        </div>
    );
};

export default Test4;