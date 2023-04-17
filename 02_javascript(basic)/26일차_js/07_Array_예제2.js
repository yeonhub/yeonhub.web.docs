'use strict';

function make(data) {
    let total = 0;
    for(let y of data){
        total+=y.num*y.num*y.m;
    }
    return total;
}
let arr = [
    {id:1, name:'사과', num:10, m:0.2},
    {id:2, name:'배', num:20, m:0.2},
    {id:3, name:'수박', num:30, m:0.2},
    {id:4, name:'참외', num:50, m:0.2}
];

let m = 0.2;
let z = make(arr, m);
console.log(`총 누적값 : ${z}`)