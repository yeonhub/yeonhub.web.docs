'use strict';
/* 
Date 객체는 시간의 한 점을 플랫폼에 종속되지 않는 형태로 나타냅니다. Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담습니다.
*/

let now = new Date();
console.log(now);
// 1. getXX : 게터(getter) : 객체의 값을 얻어오기
// 2. setXX : 세터(setter) : 객체의 값을 설정하기

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());