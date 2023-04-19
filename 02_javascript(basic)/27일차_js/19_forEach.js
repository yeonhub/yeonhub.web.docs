'use strict';
/* 
forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
요소의 개수만큼 반복처리

구문
    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
    arr.forEach(함수(현재값){
        실행문
    })

매개변수 : callback(함수)
각 요소에 대해 실행할 함수. 다음 세 가지 매개변수를 받습니다.

currentValue : 처리할 현재 요소.

index : 처리할 현재 요소의 인덱스.

array : forEach()를 호출한 배열.

thisArg : callback을 실행할 때 this로 사용할 값.

반환 값 : undefined.
*/

let arr = [10, 20, 30, 40, 50, 60];
arr.forEach(function(item, idx, arr){
    console.log(item, idx, arr);
})
// 3의배수 값만 출력
let arr1 = [];
arr.forEach(item=>{
    if(item%3===0){
        console.log(item);
        arr1.push(item);
    }
})
console.log(arr1);