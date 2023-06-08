import React from 'react';

const Test5 = () => {
    // JSX : &&, ||, ? 
    // (조건) && 참 결과
    // (조건) && 거짓 결과
    // (조건) ? 참 : 거짓
    
    const x = true;
    const y = false;
    const z = undefined;
    return (
        <div>
            <h2>JSX에서 연산자 &&, ||, ?, ===, !==</h2>
            <p>
                {x===true ? <button>확인</button> : <button>취소</button>}
            </p>
            <p>
                {x && <span>true 결과</span>}
            </p>
            <p>
                {y || <span>false 결과</span>}
            </p>
            <p>
                {z || <b>undefined</b>}
            </p>
        </div>
    );
};

export default Test5;