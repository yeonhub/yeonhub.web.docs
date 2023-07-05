import React, { useContext } from 'react';
import { CntContext } from '../../contexts/CntContext';

const Cnt = () => {
    const { cnt, increment, decrement } = useContext(CntContext)
    return (
        <div>
            <h2>숫자 UI : {cnt}</h2>
        <p>
            <button onClick={()=>decrement(100)}>-100</button>
            <button onClick={()=>decrement(10)}>-10</button>
            <button onClick={()=>decrement()}>-1 (전달값X)</button>
            <button onClick={()=>increment()}>+1 (전달값X)</button>
            <button onClick={()=>increment(10)}>+10</button>
            <button onClick={()=>increment(100)}>+100</button>
        </p>
        </div>
    );
};

export default Cnt;