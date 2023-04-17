'use strict';

/* 
    array : 비슷한, 동일한 성격의 나열 모든 값(숫자, 문자, 함수, 배열, 내장객체) 들어갈 수 있음

    일상
    1. 버스 타기
    2. 사람 많음
    3. 줄 서기
    4. 사람 추가, 교체, 제거
    5. 빨리 탐

    Array
    1. 데이터 처리
    2. 값이 많음 (3개 이상)
    3. 줄 세우기
    4. 추가, 삭제, 수정
    5. 처리 속도, 관리 빠름(유지/보수)

    형식1)
    let 배열명 = new Array();
        배열명[0] = 값;
        배열명[1] = 값;
        배열명[2] = 값;
        배열명[3] = 값;
    
    형식2)
    let 배열명 = [];
        배열명[0] = 값;
        배열명[1] = 값;
        배열명[2] = 값;
        배열명[3] = 값;

    초기화
    형식1)
    let 배열명 = new Array(값, 값, 값)

    형식2)
    let 배열명 = [값, 값, 값]
*/

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

let arr = new Array();
    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;
    arr[3] = 40;
    arr[4] = 50;

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);

console.log(`-----------------------`);

const hc=(x)=>{
    let result="";
    for(let i=0; i<x; i++){
        result = result + arr[i]
    }
    return result
}

console.log(hc(3));

console.log(`-----------------------`);

for(let i=0; i<=4; i++){
    console.log(`${i}번 : ${arr[i]}`);
}
console.log(`-----------------------`);

// in : index 객체 : 키, fo : 값
for (let x in arr) {
    console.log(`${x} : ${arr[x]}`)
}
console.log(`-----------------------`);

for(let item of arr){
    console.log(`${item} : ${item}`)
}
console.log(`-----------------------`);    

let arr1 = [];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
// 값이 길 때
let arr2 = new Array(10, 20, 30, 40);
// 잘 사용 안함
let arr3 = [10, 20, 30, 40];
// 값이 짧을 때


console.log(Array.isArray(arr));
console.log(Array.isArray('사과'));

console.log(arr.length);