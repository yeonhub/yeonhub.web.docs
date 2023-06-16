import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Test3 = () => {
    const [text, setText] = useState('')
    const textRef = useRef()

    const changeInput = e => {
        setText(e.target.value)
    }
    useEffect(()=>{
        console.log('useEffect');
        textRef.current.focus()
    },[])
    // [] 대괄호 사용시 처음 한 번만
    return (
        <div>
            <h2>useEffect</h2>
            <input type="text" ref={textRef} value={text} onChange={changeInput}/>
        </div>
    );
};

export default Test3;