import React, { useState } from 'react';

const Test4 = () => {
    const [count, setCount] = useState(0)
    const incre = () => {
        setCount(count+1)
    }
    const decre = () => { 
        setCount(count-1)
    }
    const reset = () => { 
        setCount(0)
    }
    return (
        <div>
            <h1>숫자 : {count}</h1>
            <p>
                <button onClick={incre}>증가</button>
                <button onClick={decre}>감소</button>
                <button onClick={reset}>초기화</button>
            </p>
        </div>
    );
};

export default Test4;