import React, { useState } from 'react';

const Test6 = () => {
    const [isShow, setIsShow] = useState(false)
    const onShow = () => {
        setIsShow(true)
    }
    const onHide = () => {
        setIsShow(false)
    }
    const onToggle = () => {
        setIsShow(isShow ? false : true)
    }

    const css1 = { width: 100, height: 100, background: 'tomato', border: '1px solid black', 
    }

    return (
        <div style={{ margin: '30px' }}>
            <p>
                <button onClick={onShow}>SHOW</button>
                <button onClick={onHide}>HIDE</button>
                <button onClick={onToggle}>SHOW & HIDE</button>
            </p>
            {
                isShow ? <div style={css1}></div> : null
            }
            {
                isShow && <div style={css1}></div>
            }
        </div>
    );
};

export default Test6;