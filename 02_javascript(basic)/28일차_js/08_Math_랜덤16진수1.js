'use strict';
let x = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let color ='';
for(let i=0; i<6; i++){
    color+=x[Math.floor(Math.random()*x.length)];    
}
console.log(`#${color}`);