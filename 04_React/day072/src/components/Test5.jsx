import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Test5 = () => {
    const [cnt, setCnt] = useState(0)

    // 화면 실행 후
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCnt(x=>{
                return x+1
            })
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h1>count : {cnt}</h1>
            <p>1초마다 1씩 증가</p>
        </div>
    );
};

export default Test5;