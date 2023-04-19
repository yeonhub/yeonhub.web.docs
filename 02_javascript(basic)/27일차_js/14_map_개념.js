'use strict';
/* 
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

구문
    arr.map(callback(currentValue[, index[, array]])[, thisArg])

    arr.map(함수(현재값, index){
        return 값;
        return 수식;
    })

매개변수 : callback(함수)
새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

currentValue : 처리할 현재 요소.
index : 처리할 현재 요소의 인덱스.

array : map()을 호출한 배열.
thisArg : callback을 실행할 때 this로 사용되는 값.

반환 값 : 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.
*/

let arr = [10, 20, 30, 40, 50];
// 새로운 배열 : 복제본
// slice, concat, map (복제본 : 원본이 바뀌지 않음)
let arr1 = arr.map(function(x, y){
    console.log(x, y);
    return x;
})
console.log(arr1);

console.log(`-----------------------`)

let arr2 = arr.map(function(a, b){
    console.log(a, b);
    return b;
})
console.log(arr2);

let arr3 = arr.map((c, d)=> d>=1);
console.log(arr3);

// let arr4 = arr.map(function(a, b){
//     if(a>=30){
//         return a + 20;
//     } else {
//         return a;
//     }
// });
// let arr5 = arr.map((a, b)=>{
//     if(a>=30){
//         return a + 20;
//     } else {
//         return a;
//     }
// });

// let arr6 = arr.map(function(a, b){
//     return  a>=30 ? a + 20 : a;
// }) 
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);