import React, { useContext } from 'react';
import { CountContext } from '../../contexts/CountContext';

const Count = () => {
    const {cnt, onUp, onDown} = useContext(CountContext)
    return (
        <div>
            <h2>Design Count : {cnt}</h2>
            <p>
                <button onClick={onUp}> + </button>
                <button onClick={onDown}> - </button>
            </p>
        </div>
    );
};

export default Count;