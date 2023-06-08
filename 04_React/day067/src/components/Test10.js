import React, { useRef } from 'react';

const Test10 = () => {
    const ref1 = useRef(null)

    const onRef1 = () => {
        ref1.current.style.color = 'blue'
        ref1.current.style.fontSize = '40px'
    }
    const onRef2 = () => {
        ref1.current.style.color = 'red'
        ref1.current.style.fontSize = '20px'
    }
    return (
        <div style={{ margin: '30px' }}>
            <h2 ref={ref1}>HELLO WORLD</h2>
            <button onClick={onRef1}>BLUE</button>
            <button onClick={onRef2}>RED</button>
        </div>
    );
};

export default Test10;

/* 
    Ref는 DOM 노드나 React 엘리먼트에 접근할 때 사용

    DOM 참조
    const 사용자정의 = useRef(null);
    const 사용자정의 = useRef();
    <태그 ref={사용자정의}>
    사용자정의.current

    const 사용자정의 = useRef(숫자); 값을 유지(고유번호)
*/