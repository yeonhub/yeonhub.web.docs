'use strict';
/* 
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

리듀서 함수는 네 개의 인자를 가집니다.

누산기 (acc)
현재 값 (cur)
현재 인덱스 (idx)
원본 배열 (src)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다.

구문
    arr.reduce(callback[, initialValue])

매개변수 : callback
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.

accumulator : 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.

currentValue : 처리할 현재 요소.

currentIndex : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

array : reduce()를 호출한 배열.

initialValue : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

반환 값 : 누적 계산의 결과 값.
*/

let arr = [10, 20, 30];
let sum = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

// for문
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);

// for~of
for(let x of arr){
    sum1+=x;
}
console.log(sum1);

// for~in
for(let y in arr){
    sum2+=arr[y];
}
console.log(sum2);

// forEach
arr.forEach(a=>{
    sum3+=a;
})
console.log(sum3);

let total=arr.reduce(function(acc, cur, idx, src){
    console.log(`${acc} / ${cur} / ${idx}`);
    return acc + cur
},0)
console.log(total);
let total2=arr.reduce((acc, cur)=>acc + cur, 0)
console.log(total2);

let data = [
    {id : 1, name : '유재석', age : 20, addr : '서울'},
    {id : 2, name : '정준하', age : 30, addr : '수원'},
    {id : 3, name : '정형돈', age : 30, addr : '수원'},
    {id : 4, name : '하하', age : 10, addr : '서울'},
    {id : 5, name : '노홍철', age : 10, addr : '서울'},
    {id : 6, name : '길', age : 40, addr : '인천'}
]
// 나이의 총합
let total3=data.reduce((acc, cur)=>acc + cur.age,0)
console.log(total3);
// 나이의 평균(소수점 2자리)
console.log((total3/data.length).toFixed(2));

// for문 data의 name만
let data2=[];
for(let i=0; i<data.length; i++){
    data2.push(data[i].name);
}
console.log(data2);
