'use strict';
let str = '안녕하세요'

// 1. 한 글자씩 쪼개기 (배열)
// 2. 뒤집기
// 3. 요-세-하-녕-안(문자열로 변환)

// 1
let x1 = str.split("");
console.log(x1);

// 2
let x2 = x1.reverse();
console.log(x2);

// 3
let x4 = x2.join('-');
console.log(x4);