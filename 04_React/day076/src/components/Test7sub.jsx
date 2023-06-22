import React from 'react';

const Test7sub = ({ text, num }) => {
    console.log(text, num);
    return (
        <div style={{ border: '1px solid black', margin: 30, fontSize: 20 }}>
            출력 : {text} / {num}
        </div>
    );
};

// 변하는 부분만 실행
export default React.memo(Test7sub);