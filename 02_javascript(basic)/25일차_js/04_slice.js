'use strict';
/* 
slice() 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다. 

str.slice(시작인덱스[, 종료인덱스(-1까지)])


매개변수 : beginIndex
추출 시작점인 0부터 시작하는 인덱스입니다. 만약 음수라면, beginIndex는 strLength(문자열 길이) + beginIndex로 취급됩니다. (예를 들어 beginIndex가 -3이면 시작점은 strLength - 3).
만약 beginIndex가 strLength 보다 크거나 같은 경우, slice()는 빈 문자열을 반환합니다.

endIndexOptional : 0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출됩니다. 인덱스 위치의 문자는 추출에 포함되지 않습니다.
만약 endIndex가 생략된다면, slice()는 문자열 마지막까지 추출합니다. 만약 음수라면, endIndex는 strLength(문자열 길이) + endIndex 로 취급됩니다(예를 들어 endIndex가 -3이면 종료점은 strLength - 3).

반환 값
문자열의 추출된 부분을 담는 새로운 문자열이 반환됩니다.
*/

let str = `안녕하세요 만나서 반갑습니다.`;
console.log(`1. ${str.slice(1, 3)}`);
console.log(`2. ${str.slice(2, 5)}`);
console.log(`3. ${str.slice(3)}`);
console.log(`4. ${str.slice()}`);

console.log(`5. ${str.slice(-4, -1)}`)
console.log(`6. ${str.slice(-5, -2)}`)
console.log(`7. ${str.slice(3, -2)}`)