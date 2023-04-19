'use strict';
let arr = [10, 20, 30, 40, 50];
let sum = 0, avg = 0;
let sumx = 0, sumy = 0;
let avgx = 0, avgy = 0;

// 배열의 합 : for문
// avg : 평균

for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
avg = sum/arr.length;
console.log(avg);

for(let x of arr){
    sumx += x;
}
avgx = sumx/arr.length;
console.log(avgx);

for(let y in arr){
    sumy += arr[y];
}
avgy = sumy/arr.length;
console.log(avgy);

