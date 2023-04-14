'use strict';
/* 
slice와 같지만 음수는 사용 불가능

str.substring(indexStart[, indexEnd])
인자값
indexStart
반환문자열의 시작 인덱스

indexEnd
옵션. 반환문자열의 마지막 인덱스 (포함하지 않음.)

반환값 : 기존문자열의 부분 문자열을 반환합니다.
slice는 새로운 문자열, substiong은 기존 문자열 반환

Description
substring() 메서드는 indexStart 부터 문자를 추출하지만 indexEnd 가 포함되지 않아도 괜찮습니다. 특징은 아래와 같습니다.

만약 indexEnd 가 생략된 경우, substring() 문자열의 끝까지 모든 문자를 추출합니다.
만약 indexStart 가 indexEnd와 같을 경우, substring() 빈 문자열을 반환합니다.
만약 indexStart 가 indexEnd보다 큰 경우, substring() 메서드는 마치 두 개의 인자를 바꾼 듯 작동하게 됩니다. 아래 예제를 보세요.
0보다 작은 인자 값을 가지는 경우에는 0으로, stringName.length 보다 큰 인자 값을 가지는 경우, stringName.length 로 처리됩니다. NaN 값은 0으로 처리됩니다. 
*/


let str = `안녕하세요 만나서 반갑습니다.`;
console.log(`1. ${str.substring(1, 3)}`);
console.log(`2. ${str.substring(2, 5)}`);
console.log(`3. ${str.substring(3)}`);
console.log(`4. ${str.substring()}`);
console.log(`5. ${str.substring(-4, -1)}`)
console.log(`6. ${str.substring(-5, -2)}`)
// slice는 새로운 문자열, substiong은 기존 문자열 반환