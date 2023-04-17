'use strict';

/* 
배열객체 : [{키:값, 키:값, 키:값...}, {}, {}] - js, react에서 사용

*/

let data = [
    {id:1, name:'이승기', age:20},
    {id:2, name:'강호동', age:30},
    {id:3, name:'이수근', age:40},
    {id:4, name:'MC몽', age:30},
    {id:5, name:'은지원', age:20}
]

console.log(data);
console.log(`---------------------------------`);
console.log(data[0]);
console.log(`---------------------------------`);
console.log(data[0].id, data[0].name, data[0].age);
console.log(`---------------------------------`);
console.log(data[0]['id'], data[0]['name'], data[0]['age']);
console.log(`---------------------------------`);

for(let i=0; i<data.length; i++){
    console.log(`번호 : ${data[i].id} 이름 : ${data[i].name} 나이 : ${data[i].age}`)
}
console.log(`---------------------------------`);
for(let item of data){
    console.log(item)
}