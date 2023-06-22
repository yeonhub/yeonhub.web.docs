import React, { useMemo, useState } from 'react';
import Test2sub from './Test2sub';

const Test2 = () => {
    const [cnt, setCnt] = useState(1)
    const fun = useMemo (() => {
        return <Test2sub cnt={cnt} />
    },[cnt])

    return (
        <div>
            <h2>useMemo : return 기억</h2>
            <h1>count : {cnt}</h1>
            <button onClick={() => setCnt(cnt + 1)}>+</button>
            <hr />
            {fun}
        </div>
    );
};

export default Test2;