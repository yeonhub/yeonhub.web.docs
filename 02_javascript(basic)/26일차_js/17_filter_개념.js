'use strict';

/* 
filter
filter() 함수의 조건에 맞는 요소들을 모아 새로운 배열로 반환

구문 : arr.filter(callback(element[, index[, array]])[, thisArg])

        arr.filter(function(현재값, 인덱스, 배열){
            return 조건
        })
        -----------------------------------------------------
        arr.filter=(현재값, 인덱스, 배열)=>{
            return 조건
        })
        -----------------------------------------------------
        arr.filter(function(현재값){
            return 조건
        })
        -----------------------------------------------------
        arr.filter=(현재값)=>조건)

매개변수 : 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.

element : 현재 요소.

index : 인덱스.

array : 배열.

thisArg : this로 사용하는 값.

반환 값 : 조건에 맞는 요소로 이루어진 새로운 배열. 어떤 요소도 조건에 부합하지 않는다면 빈 배열을 반환합니다.
*/

let arr = [10, 20, 30, 40, 50, 60];
let arr1 = arr.filter(function(element, index, array){
    // 조건
    if(element % 3 === 0){
        return true;
    } else {
        return false;
    }
})
console.log(arr1);

let arr2 = arr.filter(function(x){
    return x % 3 === 0;
});
console.log(arr2);

let arr3 = arr.filter((x)=>x % 3 === 0);
console.log(arr3);