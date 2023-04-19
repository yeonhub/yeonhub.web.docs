'use strict';
let arr1 = [10, 20, 30, 40];
let arr2 = ['유재석', '노홍철', '박명수', '하하']

// indexOf() : 찾으면 인덱스 위치값, 못 찾으면 -1
console.log(arr1.indexOf(20));
console.log(arr1.indexOf(10));
console.log(arr1.indexOf(30));
console.log(arr1.indexOf(50));

console.log(`-------------------------`);

console.log(arr2.indexOf('유재석'));
console.log(arr2.indexOf('하하'));
console.log(arr2.indexOf('정준하'));


console.log(`-------------------------`);

// includes() : 찾으면 true, 못 찾으면 false
console.log(arr1.includes(10));
console.log(arr1.includes(20));
console.log(arr1.includes(50));


console.log(`-------------------------`);

console.log(arr2.includes('노홍철'));
console.log(arr2.includes('박명수'));
console.log(arr2.includes('정형돈'));