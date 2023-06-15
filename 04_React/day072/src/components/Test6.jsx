import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Test6 = () => {
    const [step, setStep] = useState(0)
    const [cnt, setCnt] = useState(0)

    useEffect(()=>{
        const timer = setInterval(() => {
            setCnt(x=>x+step)
        }, 1000);
        return()=>{clearInterval(timer)}
    },[step])

    const changeInput=(e)=>{
        setStep(e.target.value)
    }

    return (
        <div>
            <h1>count : {cnt}</h1>
            <input type="text" value={step} onChange={changeInput}/>
            <p>1초 마다 input 값만 증가</p>
        </div>
    );
};

export default Test6;