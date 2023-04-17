'use strict';

/* 
push
push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.

구문 : arr.push(element1[, ...[, elementN]])

매개변수 : elementN
배열의 끝에 추가할 요소.

반환 값 : 호출한 배열의 새로운 length 속성.

------------------------------------------------------
pop
pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.

구문 : arr.pop()

반환 값 : 배열에서 제거한 요소. 빈 배열의 경우 undefined 를 반환합니다.
*/

let arr = ['red', 'green', 'blue'];
arr.push('black');
arr.push('white');
arr.push('orange');
console.log(arr);
// 배열의 맨 끝에 새로운 요소를 추가

arr.pop();
arr.pop();
console.log(arr);
// 배열의 맨 끝 요소를 제거
arr.pop();
console.log(arr);
