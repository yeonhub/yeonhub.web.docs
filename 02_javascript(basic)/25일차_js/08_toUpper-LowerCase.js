'use strict';
/* 
toUpperCase() 메서드는 문자열을 대문자로 변환해 반환합니다.

str.toUpperCase()

예외
TypeError
Function.prototype.call() 등을 사용해 null이나 undefined에서 호출 시.

설명
toUpperCase() 메서드는 문자열을 대문자로 변환한 값을 반환합니다. JavaScript의 문자열은 불변하므로 원본 문자열에는 영향을 주지 않습니다.
*/

let str = 'String Test';
let str1 = str.toLowerCase();
// 소문자
let str2 = str.toUpperCase();
// 대문자

console.log(`소문자 : ${str1}`);
console.log(`대문자 : ${str2}`);

