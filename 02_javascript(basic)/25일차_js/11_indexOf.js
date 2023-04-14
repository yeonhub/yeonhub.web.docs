'use strict';

/* 
indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다.

str.indexOf(검색값)
str.indexOf(찾을값, 시작위치)

*/

let str = '안녕하세요. 만나서 반갑습니다. 다음에 또 만나요.'
let a = str.indexOf('안');
let b = str.indexOf('안녕');
let c = str.indexOf('반');
let d = str.indexOf('반', 10);
let e = str.indexOf('고');


console.log(`1. ${a}`);
console.log(`2. ${b}`);
console.log(`3. ${c}`);
console.log(`4. ${d}`);
console.log(`5. ${e}`);
console.log(`-----------------------`);

let str1 = str.indexOf('잘가');
if(str1!==-1) {
    console.log(`검색 결과 : ${str1}번째`);
} else {
    console.log(`검색 결과 없음`);
}