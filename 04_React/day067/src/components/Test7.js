import React, { useState } from 'react';
import './Test7.scss'
const Test7 = () => {
    const [isClass, setIsClass] = useState(false)
    const onAdd = () => { 
        setIsClass(true)
    }
    const onRemove = () => { 
        setIsClass(false)
    }
    const onToggle = () => { 
        setIsClass(!isClass)
    }
    return (
        <div className="wrap">
            <p className="on"> HELLO WORLD </p>
            <p className="on1"> HELLO WORLD </p>
            <p className="test on"> HELLO WORLD </p>
            <hr />
            <p className={isClass ? 'on' : ''}> HELLO WORLD </p>
            <p className={isClass ? 'on1' : ''}> HELLO WORLD </p>
            <p className={`test ${isClass ? 'on' : ''}`}> HELLO WORLD </p>
            <div>
                <button onClick={onAdd}>classList.add</button>
                <button onClick={onRemove}>classList.remove</button>
                <button onClick={onToggle}>classList.toggle</button>
            </div>
        </div>
    );
};
export default Test7;