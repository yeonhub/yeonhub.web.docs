import React from 'react';

const abc = () => {
    return (
        <div>
            컴포넌트
        </div>
    );
};

export default abc;
// return 부분을 넘겨준다

/* 
    1. 확장자 js, jsx
    2. 파일명 첫 글자 대문자
    3. 컴포넌트 : UI의 작은 조각(재사용), 함수형 컴포넌트(함수구조)
    4. return 안에 작성하는 구조는 JSX(개발 형식은 html)
    5. 연산자 : &&, ||, ?
    6. 반복문 : map, filter(조건), forEach(X)
    7. js식 변수, 식 { } 블럭 안에 작성
    8. '문자' + 변수 : 사용 X, `${변수, 수식}` : 사용 O

    const 컴포넌트명 = () => {
        함수영역 : 모든 명령어 사용 가능(for, if 등)
        
        return (
            *** JSX영역 ***
        )
    }
    export default 컴포넌트명 - 메인은 하나만

    import 참조변수 form '경로' - export default
    참조변수(첫 글자 대문자) <참조변수 />
    import {참조변수} form '경로' - export
*/