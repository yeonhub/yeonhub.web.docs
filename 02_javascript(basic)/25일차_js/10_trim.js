'use strict';
/* 
시작과 끝에서 공백이 제거된 str을 나타내는 새로운 문자열입니다.
한쪽 끝의 공백만 제거한 문자열을 반환하시려면 trimStart() 또는 trimEnd() 메서드를 사용하세요.
*/

let str = '            안녕    잘가    '

console.log(`|${str}|`);
console.log(`|${str.trim()}|`);
// 앞뒤 공백 제거
console.log(`|${str.trimStart()}|`);
// 앞쪽 공백 제거
console.log(`|${str.trimEnd()}|`);
// 뒤쪽 공백 제거