import React from 'react';
import { useToggle2 } from '../hooks/useToggle2'

const Test5 = () => {
    const { state, onToggle, onChk } = useToggle2(false)
    return (
        <div>
            <h2>{`${state}`}</h2>
            <p>
                <button onClick={()=>onToggle('toggle')}>toggle</button>
                <button onClick={()=>onToggle('true')}>true</button>
                <button onClick={()=>onToggle('false')}>false</button>
            </p>
        </div>
    );
};

export default Test5;