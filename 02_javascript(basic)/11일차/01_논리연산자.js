'use strict';
//  && and 그리고, || or 또는, ! not - true/false
let test = true;

test=true && true;
test=true && false;
test=false && false;

test=true || true;
test=true || false;
test=false || false;

test=!test;
// 참이면 거짓, 거짓이면 참 not false = true

console.log('결과: %s ', test)

let a = 10, b = 20, c = 30, isplay = false, result=null;

result = (a>b) && (a>c);
console.log('(a>b) && (a>c): %s', result);
result = (a<b) && (a>c);
console.log('(a<b) && (a>c): %s', result);
result = (a<b) || (a>c);
console.log('(a<b) && (a>c): %s', result);

result = !isplay;
console.log('isplay: %s', result);

let num = 35;
result = (num>=0) && (num<=100);
console.log('num>=0 && num<=100: %s', result);