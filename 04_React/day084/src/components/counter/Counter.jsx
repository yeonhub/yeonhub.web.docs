import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

const Counter = () => {
    const { count, dispatch } = useContext(CounterContext)
    return (
        <div>
            <h2>reducer UI : {count}</h2>
            <p>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'RESET' })}> Reset</button >
            </p >
        </div >
    );
};

export default Counter;