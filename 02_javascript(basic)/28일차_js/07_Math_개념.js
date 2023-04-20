'use strict';
/* 
Math.random()
1. random() : 0~1 실수 0과 1은 포함되지 않음
.ceil() : 소수점 올림
.floor() : 소수점 버림

.max() : 최대값
.min() : 최소값
.abs() : 절대값
.round() : 소수점 반올림
*/

let r1 = Math.random();
console.log(r1);
// 0.XXX ~ 0.9XX
r1 = Math.random()*10;
console.log(r1);
// 0.XXX ~ 9.XXX
r1 = Math.random()+5;
console.log(r1);
// 5.XXX ~ 5.XXX

r1 = Math.abs(-2)
console.log(r1);
// 절대값

r1 = Math.ceil(5.84);
console.log(r1);
r1 = Math.floor(5.84);
console.log(r1);
r1 = Math.round(5.84);
console.log(r1);

r1 = Math.max(10,40,20,50);
console.log(r1);
r1 = Math.min(10,40,20,50);
console.log(r1);