'use strict';

const increment=()=>{
    let x = 0;
    return function(){
        console.log(x++);
    }
}

let count = increment();
console.log(count);
count();
count();
count();
count();

console.log('===============');

const decrement=(x=10)=>{
    return function(){
        return x--;
    }
}

let num = decrement();
for (let i = 0; i < 10; i++) {
    console.log(num());  
}