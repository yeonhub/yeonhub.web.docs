'use strict';

let a1 = Math.floor(Math.random()*16);
a1 = a1.toString(16);
console.log(a1)

let x1 = Math.floor(Math.random()*16).toString(16);
let x2 = Math.floor(Math.random()*16).toString(16);
let x3 = Math.floor(Math.random()*16).toString(16);
let x4 = Math.floor(Math.random()*16).toString(16);
let x5 = Math.floor(Math.random()*16).toString(16);
let x6 = Math.floor(Math.random()*16).toString(16);

console.log(`#${x1+x2+x3+x4+x5+x6}`)

let y = '';
for(let i=0; i<6; i++){
    y += Math.floor(Math.random()*16).toString(16);
}
console.log(`#${y}`);

let num = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'