import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../../store/modules/counterSlice';

const Counter = () => {
    const { counter } = useSelector(state => state.counterR)

    const dispatch = useDispatch()
    return (
        <div>
            <h2>카운트 : {counter}</h2>
            <p>
                <button onClick={()=>dispatch(minus(10))}>-10</button>
                <button onClick={()=>dispatch(minus())}>-1</button>
                <button onClick={()=>dispatch(plus())}>+1</button>
                <button onClick={()=>dispatch(plus(10))}>+10</button>
            </p>
        </div>
    );
};

export default Counter;