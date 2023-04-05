'use strict';

var myNum1;
myNum1 = 100;
console.log(myNum1);

var myNum2;
myNum2 = 200;
console.log(myNum2);

// 값 재할당
myNum2 = 500;
console.log(myNum2);

// var 단점 : 할당할 때 마다 값 저장 공간을 새로 만듦
var myNum2 = 50;
console.log(myNum2);

/* let : 재할당 가능, 재선언 불가능 */
// 1.변수 선언
let myNum3;
// 2. 변수 할당
myNum3 = 100;
console.log(myNum3);
// 3. 재할당
myNum3 = 200;
console.log(myNum3);

// let myNum3 = 400; = 재선언 = 에러

// const : 상수 개념 : 선언후 재할당, 재선언 불가능
const My_NUM4 = 300;
console.log(My_NUM4);
/* const myNum5;
myNum5 = 400;
console.log(myNum5); */

// const 변수=값 선언과 동시에 할당
const myNum5 = 400;
console.log(myNum5);
// myNum5 = 500; 재할당 할 수 없다
