'use strict';

// 구구단
// dna * i = 결과
const fn=(dan, i=1)=>{
    if(i>9){
        return;
    } else {
        console.log(`${dan}x${i}=${dan*i}`);
        fn(dan, i+1);
    }
}
fn(5);