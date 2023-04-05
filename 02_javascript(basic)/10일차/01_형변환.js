'use strict';

let a = 10;
console.log('a :', a , typeof a );
a = String( a ); 
console.log('a :', a , typeof a );
let b = a + 20;
// 문자+숫자 : 연결 1020
console.log('b :', b , typeof b );

let a1 = '200';
// ' ' = 문자
console.log('a1 :', a1 , typeof a1 );
a1 = Number( a1 );
console.log('a1 :', a1 , typeof a1 );
let a2 = a1 + 20;
console.log('a2 :', a2 , typeof a2 );

let a3 = '300';
a3 = parseInt(a3)
// Number와 같이 숫자로 변환, 뒤에 따라오는 문자도 지우고 싶으면 pareInt
console.log('a3 :', a3 , typeof a3 );
let a4 = '200px';
a4 = parseInt( a4 );
let a5 = a4 + 100;
console.log('a5 :', a5 , typeof a5 );

let a6 = '20살';
a6 = parseInt( a6 );
console.log('a6 :', a6 , typeof a6 );

// toString(진법) 숫자를 문자화 기본이 10진법
let c1 = 100;
let d1 = c1.toString();
console.log('d1 :', d1 , typeof d1 );

d1 = c1.toString(2);
console.log('d1 :', d1 , typeof d1 );

d1 = c1.toString(8);
console.log('d1 :', d1 , typeof d1 );

d1 = c1.toString(16);
console.log('d1 :', d1 , typeof d1 );

// toFixed(소수점)
let c2 = 100.5627652;
let d2 = c2.toFixed(3);
console.log('d2 :', d2 , typeof d2 );
// 반올림 해서 세자리까지 표시 후 문자화 
d2 = c2.toFixed(0);
console.log('d2 :', d2 , typeof d2 );












/* 
mdn

number
string
paraseInt
toSpring
toFixed
*/