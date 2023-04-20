'use strict';
let arr = [
    [10, 20, 30],
    [40, 50, 60]
]
// arr = [[10, 20, 30], [40, 50, 60]]

let a = [10, 20, 30]
let b = [40, 50, 60]
let arr1 = [a, b]
console.log(arr1);

console.log(`----------------------------`)

//             행 열
console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);
console.log(arr[1][0]);

console.log(`----------------------------`)

console.log(arr.length); // arr 행 length
console.log(arr[1].length); // 1번 행의 열 length

console.log(`----------------------------`)

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

console.log(`----------------------------`)

for(let x of arr){
    console.log(x);
    for(let y of x)
    console.log(y);
}

console.log(`----------------------------`)

let sum=0;
for (let z=0; z<arr.length; z++){
    for (let a=0; a<arr[z].length; a++){
        sum+= arr[z][a];
    }
}
console.log(sum);

console.log(`----------------------------`)

let sum1=0;
for(let x of arr){
    for(let y of x)
    sum1+=y;
}
console.log(sum1);



/* 
[
    열 열 열
행:[10,20,30],
행:[40,50,60]
]
*/