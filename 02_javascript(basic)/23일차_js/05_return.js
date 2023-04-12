'use strict';

const fn = () =>{
    console.log('테스트1');
    return; 
    // 반복문은 break, 함수는 return시 끝나게됨
    console.log('테스트2');
    console.log('테스트3');
}

let x = fn();
console.log(x);

console.log('-----------------------');

const sum=(a, b)=>{
    if (typeof a == 'number' && typeof b == 'number') {
        return a+b;
    } 
    console.log('숫자가 아닙니다.');
    return;

};
let result = sum('10', '20'); //문자
result = sum(20, 30); //숫자

if ( typeof result == 'number' ){
    console.log(`결과: ${result}`);
};