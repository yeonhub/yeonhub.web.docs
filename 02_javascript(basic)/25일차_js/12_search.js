'use strict';

/* 
indexOf와 비슷하지만 정규 표현식 객체에서 반환하고 싶을 때 사용한다. 정규 표현식은 추후에 배운다고 한다.

*/

let str = '안녕하세요. 만나서 반갑습니다. 다음에 또 만나요.'
let a = str.search('안');
let b = str.search('안녕');
let c = str.search('반');
let d = str.search('반, 10');
let e = str.search('고');


console.log(`1. ${a}`);
console.log(`2. ${b}`);
console.log(`3. ${c}`);
console.log(`4. ${d}`);
console.log(`5. ${e}`);
console.log(`-----------------------`);

let str1 = str.search('잘가');
if(str1!==-1) {
    console.log(`검색 결과 : ${str1}번째`);
} else {
    console.log(`검색 결과 없음`);
}