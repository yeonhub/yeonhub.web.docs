import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Test2 = () => {
    const [count, setCount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const onColor = () => {
        setCount(count + 1)
        ref1.current.style.backgroundColor = 'tan'
        ref2.current.style.backgroundColor = 'lightgray'
    }
    // 화면에 그려진 후 한번만
    useEffect(() => {
        console.log("useEffect")
        ref1.current.style.backgroundColor = 'orange'
    })

    // 화면에 그려지기 전 한번만
    // useEffect 안될 때 useLayoutEffect 사용
    useEffect(() => {
        console.log("useLayoutEffect")
        ref2.current.style.backgroundColor = 'tomato'
    })

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <h2 ref={ref1}> useEffect</h2>
            <h2 ref={ref2}> useLayoutEffect</h2>
            <button onClick={onColor}>카운트 + 컬러</button>
        </div>
    );
};

export default Test2;

/* 
  useEffect
  
  Effect Hook를 사용하면 함수 험포넌트에서 side effect를 수행할 수 있습니다.
  side effect : 부수효과 (함수 결과값을 반환하는 것외에 다른 효과)
  데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다. 
  
*/