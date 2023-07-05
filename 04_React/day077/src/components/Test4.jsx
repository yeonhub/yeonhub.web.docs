import React from 'react';
import { useToggle } from '../hooks/useToggle'

const Test4 = () => {
    const { state, onToggle, onChk } = useToggle(false)
    return (
        <div>
            <h2>{`${state}`}</h2>
            <p>
                <button onClick={onToggle}>toggle</button>
                <button onClick={() => onChk(true)}>true</button>
                <button onClick={() => onChk(false)}>false</button>
            </p>
        </div>
    );
};

export default Test4;