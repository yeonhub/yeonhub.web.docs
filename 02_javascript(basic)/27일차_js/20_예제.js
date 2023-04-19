'use strict';
let colors = ['노랑','파랑','빨강','분홍'];
// map문  - 결과1
//forEach문  - 결과2
//결과 : [노랑색 ,파랑색 ,빨강색, 분홍색]

// let c1 = colors.map(function(x){
//     return x+'색';
// })

// let c1 = colors.map(x=>{
//     return x+'색';
// })

let c1 = colors.map(x=>x+'색')
console.log(c1);

let c3 = [];
let c2 = colors.forEach(function(x){
    c3.push(x + '색');
})
console.log(c3);