'use strict';

function make(){
    return function() {
        console.log('인사하기');
    }
}
let x = make();
x();
// -----------------

function make2(name){
    return function(hi) {
        console.log(`인사하기2: ${name} ${hi}`);
    }
}
let x2 = make2('강호동');
console.log(x2);
x2('안녕');
// -----------------

function make3(name){
    function innerFn(hi) {
        console.log(`인사하기3: ${name} ${hi}`);
    }
    return innerFn;
}
let x3 = make3('이수근');
x3('안녕');