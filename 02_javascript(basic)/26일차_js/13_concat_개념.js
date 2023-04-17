'use strict';

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = arr1.concat(10, 20, 30);
console.log(arr4);

const arr5 = arr2.concat('철수', '영희');
console.log(arr5);

const arr6 = arr1.concat(arr2, arr3, arr4);
console.log(arr6);