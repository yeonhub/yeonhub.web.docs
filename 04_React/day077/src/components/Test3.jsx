import React from 'react';
import { useCounter } from '../hooks/useCounter'

const Test3 = () => {
    const { state, onIncre, onDecre, onReset } = useCounter(10)
    return (
        <div>
            <h1>count : {state}</h1>
            <p>
                <button onClick={onIncre}>incre</button>
                <button onClick={onDecre}>decre</button>
                <button onClick={onReset}>reset</button>
            </p>
        </div>
    );
};

export default Test3;