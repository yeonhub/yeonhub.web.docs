'use strict';

let data = [
    {id : 1, name : '유재석', age : 20, addr : '서울'},
    {id : 2, name : '정준하', age : 30, addr : '수원'},
    {id : 3, name : '정형돈', age : 30, addr : '수원'},
    {id : 4, name : '하하', age : 10, addr : '서울'},
    {id : 5, name : '노홍철', age : 10, addr : '서울'},
    {id : 6, name : '길', age : 40, addr : '인천'}
]

let txt = '정';
let data1 = data.filter(function(x){
    return x.name.indexOf(txt) !== -1;
})
console.log(data1);
console.log(`-`)

let data2 = data.filter(y=>y.name.indexOf(txt) !== -1);
console.log(data2);
console.log(`--`)

let data3 = data.filter(function(a){
    return a.name.includes(txt);
})
console.log(data3);
console.log(`---`)

let data4 = data.filter(b=>b.name.includes(txt));
console.log(data4);