'use strict';

let arr = [10, 20, 30, 40, 50, 60];

const callback=(x, y)=>{
    if(x % 3 === 0){
        return true;
    } else {
        return false;
    }
};
let result1 = arr.filter(callback);

console.log(result1);
// filter는 원본이 바뀌지 않음

let result2 = arr.filter(function(a){
    if(a>30){
        return true;
    } else {
        return false;
    }
});
console.log(result2);

let result3 = arr.filter(function(b){
    return b >30
});
console.log(result3);

let result4 = arr.filter(b=> b >30);
console.log(result4);

let result5 = arr.filter(c=> c !==30);
console.log(result5);