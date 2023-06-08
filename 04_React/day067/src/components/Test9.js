import React, { useState } from 'react';

const Test9 = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const changeInput1 = (e) => {
        setUserid(e.target.value)
    }
    const changeInput2 = (e) => {
        const { value } = e.target
        setUserpw(value)
    }
    const onReset = () => {
        setUserid('')
        setUserpw('')
    }
    return (
        <div style={{ margin: '30px' }}>
            <input type="text" onChange={changeInput1} value={userid}/>
            <input type="text" onChange={changeInput2} value={userpw}/>
            <button onClick={onReset}>초기화</button>
            <hr />
            <h3>ID : {userid}</h3>
            <h3>PW : {userpw}</h3>
        </div>
    );
};

export default Test9;