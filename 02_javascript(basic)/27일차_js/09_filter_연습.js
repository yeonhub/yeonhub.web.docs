'use strict';
let arr = ['유재석', '정준하', '정형돈', '노홍철'];
let txt = '정';

// arr에서 정이 들어간 요소 출력 : indexOf
let a1 = arr.filter(function(x){
    return x.indexOf(txt) !== -1
});
let a2 = arr.filter(x=>x.indexOf(txt) !== -1);

let a3 = arr.filter(function(y){
    return y.includes(txt)
});
let a4 = arr.filter(z=>z.includes(txt));

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);