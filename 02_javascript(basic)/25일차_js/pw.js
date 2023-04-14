'use strict';

'use strict';

let getPW = ''; // 입력값
let max_length = 8; // 최대자리수
let convertPW = ''; // 변환값

// 입력받기
getPW = prompt('비밀번호를 입력하세요.(1 ~ 8자리)');

// 함수 시작

// function
let make = (password) => {
    
    let result = '';
    let temp = 0;
    temp = max_length - password.length;
    
    for (let i = temp; i > 0; i--) {
        result += String(i);
    }
    return result + password;
}
// return 값 사용하기

// 함수 끝

convertPW = make(getPW); // return 값을 변환 비밀번호 변수에 저장


document.write(`${convertPW}`); // 출력하기

