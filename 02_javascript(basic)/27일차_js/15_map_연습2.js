'use strict';
let arr = [10, 20, 30, 40, 50, 60];

let arr1 = arr.map((a)=>{
    if(a % 3 === 0){
        return a + 100;
    } else {
        return a;
    }
})

console.log(arr1);

let arr2 = arr.map((a)=>{
    return a % 3 === 0 ? a + 100 : a;
    }
)

console.log(arr2);

