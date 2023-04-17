'use strict';

/* 
shift
shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

구문 : arr.shift()

반환 값 : 배열에서 제거한 요소. 빈 배열의 경우 undefined 를 반환합니다.

------------------------------------------------------
unshift
unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.

구문 : arr.unshift([...elementN])

매개변수 : elementN
배열 맨 앞에 추가할 요소.

반환 값 : 메서드를 호출한 배열의 새로운 length 속성.
*/

let arr = ['red', 'green', 'blue'];
arr.push('black');
arr.push('white');
arr.push('orange');
console.log(arr);

arr.unshift('빨강');
arr.unshift('초록');
console.log(arr);
// 배열 맨 앞에 요소 추가

arr.shift();
console.log(arr);
// 배열 맨 앞 요소 제거

// 요소 수정
arr[0] = '주황';
console.log(arr);

// 요소가 몇 개 인지 모르나 마지막 요소를 바꿀 때
arr[arr.length-1] = '핑크';
console.log(arr);