'use strict';
/* 
every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.
*/

let arr = [10, 20, 30, 40, 50];

// 배열의 요소들이 조건에 모두 만족하면 true
let arr1 = arr.every(x=>x<50);
console.log(arr1);

// 배열의 요소들이 조건에 하나라도 만족하면 true
let arr2 = arr.some(x=>x<50);
console.log(arr2);