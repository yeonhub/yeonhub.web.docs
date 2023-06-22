import React, { useCallback, useState } from 'react';
import Test7sub from './Test7sub';

const Test7 = () => {
    const [cnt1, setCnt1] = useState(1)
    const [cnt2, setCnt2] = useState(10)
    const [cnt3, setCnt3] = useState(100)

    const onUp1 = useCallback(() => {
        setCnt1(cnt1 + 1)
    }, [cnt1])

    const onUp2 = useCallback(() => {
        setCnt2(cnt2 + 1)
    }, [cnt2])

    const onUp3 = useCallback(() => {
        setCnt3(cnt3 + 1)
    }, [cnt3])

    return (
        <div>
            <h2>count1 : {cnt1}</h2>
            <Test7sub text="증가 1" num={cnt1} />
            <button onClick={onUp1}>증가</button>
            <h2>count2 : {cnt2}</h2>
            <Test7sub text="증가 2" num={cnt2} />
            <button onClick={onUp2}>증가</button>
            <h2>count3 : {cnt3}</h2>
            <Test7sub text="증가 3" num={cnt3} />
            <button onClick={onUp3}>증가</button>
        </div>
    );
};

export default Test7;