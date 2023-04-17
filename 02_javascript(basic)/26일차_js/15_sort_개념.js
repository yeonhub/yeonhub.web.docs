'use strict';

// let arr = [60, 50, 20, 30, 40, 80, 90, 10];
// console.log(arr.sort());

// console.log(arr);
let arr1 = [60, 50, 100, 20, 150, 120, 10, 30, 230]
arr1.sort(function(a, b){
    console.log(`${a} / ${b}`);
    if(a>b){
        return 1;
    } else if (a<b) {
        return -1;
    } else {
        return 0;
    }
})
// 함수 원리 알려고 하지 말 것

console.log(arr1);
console.log(`----------------------------`)

let arr2 = [60, 50, 100, 20, 150, 120, 10, 30, 230];
arr2.sort(function(a, b){
    return a - b;
})
// 화살표 함수
arr2.sort=((a, b)=>{
    return a - b;
})
// 오름차순 a-b 내림차순 b-a
console.log(arr2);

// let arr4 = [10, 40, 20, 50];
// arr4.reverse();
// console.log(arr4);