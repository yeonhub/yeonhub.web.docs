import React from 'react';

const Test2 = () => {
    // 함수영역 ; 생략 가능
    let title = '신상명세서'
    const name = '김'
    const age = 20
    const arr = '서울특별시 광진구'
    const tel = '010-7777-4511'

    // css 객체형 '속성':'값', ex) backgroundColor
    const css1 = {
        fontSize: 30,
        width: 300,
        lineHeight: '50px',
        backgroundColor: 'tan'
    }
    const css2 = {
        fontWeight: 700,
        width: 500,
        color: 'blue',
        borderBottom: '3px solid #000',
        paddingBottom: 20
    }

    return (
        <>
            <h2 style={css1}>{title}</h2>
            <h3 style={css2}>수식, 변수 &#123; &#125; 중괄호</h3>
            <ul>
                <li style={{ color: 'green', fontSize: 40 }}>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {arr}</li>
                <li>연락처 : {tel}</li>
            </ul>

        </>
    );
};

export default Test2;