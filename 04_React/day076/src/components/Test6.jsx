import React, { useCallback, useState } from 'react';

const Test6 = () => {
    const [cnt, setCnt] = useState(0)

    const onUp = useCallback(() => {
        setCnt(cnt => cnt + 1)
    }, [])
    const onDown = useCallback(() => {
        setCnt(cnt => cnt - 1)
    }, [])
    return (
        <div>
            <h2>count : {cnt}</h2>
            <button onClick={onUp}>+</button>
            <button onClick={onDown}>-</button>
        </div>
    );
};

export default Test6;