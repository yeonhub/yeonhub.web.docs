'use strict';

let a = 100;
let b = 123.456;
let c = 'Not a Number';
let d = 10*20;
let e = ' ';
let f = true;
/* 
isNaN : 숫자, 문자 판별
NaN == NaN, NaN === NaN은 false로 평가되기 때문에 NaN을 
판별하는 함수가 필요하다. 
숫자, 공백, 논리값 = false
문자, 문자+숫자 = true
 */

console.log(`출력: ${typeof a}, ${isNaN(a)}`);
console.log(`출력: ${typeof b}, ${isNaN(b)}`);
console.log(`출력: ${typeof c}, ${isNaN(c)}`);
console.log(`출력: ${typeof d}, ${isNaN(d)}`);
console.log(`출력: ${typeof e}, ${isNaN(e)}`);
console.log(`출력: ${typeof f}, ${isNaN(f)}`);

let str1 = a + c;
let str2 = String(a) + String(b);
let str3 = Number(str2);
console.log(`${typeof str1}, ${isNaN(str1)}`);
console.log(`${typeof str2}, ${isNaN(str2)}`);
console.log(`${typeof str3}, ${isNaN(str3)}`);