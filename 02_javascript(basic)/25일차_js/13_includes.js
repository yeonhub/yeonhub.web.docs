'use strict';

/* 
includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.

includes(검색어)
includes(검색어, 시작 위치)

매개변수 : searchString
이 문자열에서 찾을 다른 문자열. 정규표현식이 올 수 없습니다.

position : searchString을 찾기 시작할 위치. (기본값 0).

반환값 : 문자열을 찾아내면 true . 실패하면 false .
*/

let str = '안녕하세요. 만나서 반갑습니다. 다음에 또 만나요.'

let a = str.includes('안');
let b = str.includes('만나');
let c = str.includes('요');
let d = str.includes('김');
let e = str.includes('반갑읍니다');

console.log(`1, ${a}`);
console.log(`2, ${b}`);
console.log(`3, ${c}`);
console.log(`4, ${d}`);
console.log(`5, ${e}`);

let str1 = '잘가';
if(str.includes(str1)) {
    console.log(`${str1}은/는 ${str}에 있습니다.`);
} else {
    console.log(`${str1}은/는 ${str}에 없습니다.`);
}
