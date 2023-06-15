import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Test4Sub = () => {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const onMove =(e)=>{
        console.log('move');
        setX(e.clientX)
        setY(e.clientY)
    }

    // window.addEventListener('mousemove', onMove)
    
    useEffect(()=>{
        window.addEventListener('mousemove', onMove)
        // 뒷 정리
        return()=>{
            window.addEventListener('mousemove', onMove)
        }
    })

    return (
        <div>
            x : {x}/ y : {y}
        </div>
    );
};

export default Test4Sub;