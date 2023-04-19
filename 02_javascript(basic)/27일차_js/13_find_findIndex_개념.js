'use strict';
/* 

.filter(함수(현재값, index){
    return 조건
})
반환값이 [] 배열

.find(함수(현재값){
    return 조건
})
반환값이 {} 하나

.findIndex(함수(현재값){
    return 조건
})
반환값이 index번호 하나

find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

구문
    arr.find(callback[, thisArg])

매개변수 : callback
배열의 각 값에 대해 실행할 함수. 아래의 세 인자를 받습니다._ element _ : 콜백함수에서 처리할 현재 요소.

index : 콜백함수에서 처리할 현재 요소의 인덱스.

array : 
find 함수를 호출한 배열.

thisArg : 선택 항목. 콜백이 호출될 때 this로 사용할 객체.

반환 값 : 주어진 판별 함수를 만족하는 첫 번째 요소의 값. 그 외에는 undefined.
*/

let arr = [10, 20, 30, 40, 50];

let a1 = arr.filter(x=>x>=30);
let a2 = arr.find(x=>x>=30);
let a3 = arr.findIndex(x=>x>=30);

console.log(a1);
console.log(a2);
console.log(a3);


let data = [
    {id : 1, name : '유재석', age : 20, addr : '서울'},
    {id : 2, name : '정준하', age : 30, addr : '수원'},
    {id : 3, name : '정형돈', age : 30, addr : '수원'},
    {id : 4, name : '하하', age : 10, addr : '서울'},
    {id : 5, name : '노홍철', age : 10, addr : '서울'},
    {id : 6, name : '길', age : 40, addr : '인천'}
]
// id가 3인 사람 [{}] 출력
let data1 = data.filter(a=>a.id===3);
console.log(data1);
// id가 3인 사람 {} 출력
let data2 = data.find(a=>a.id===3);
console.log(data2);
// id가 3인 사람 인덱스 번호 출력
let data3 = data.findIndex(a=>a.id===3);
console.log(data3);