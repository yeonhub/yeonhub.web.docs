import React from 'react';
const Test2 = () => {
    let num = 0
    const increment = () => {
        num = num + 1
        console.log(num);
    }
    return (
        <div style={{margin:'30px'}}>
            <h2>count : {num}</h2>
            <button onClick={increment}>증가</button>
        </div>
    );
};
export default Test2;

/*  
    랜더링 : return으로 받은 것을 화면에 출력
        랜더링이 될 때 마다 react는 내부의 것들을 기억하지 못함
        함수, 변수 등 랜더링 시 새로 만듦
        다시 생성하고 초기화 한다.
        
    hook : 값을 유지, 업데이트, 메모리 낭비 등을 처리(use + xxx)
*/