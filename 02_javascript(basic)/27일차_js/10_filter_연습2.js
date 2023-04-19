'use strict';

let data = [
    {id : 1, name : '유재석', age : 20, addr : '서울'},
    {id : 2, name : '정준하', age : 30, addr : '수원'},
    {id : 3, name : '정형돈', age : 30, addr : '수원'},
    {id : 4, name : '하하', age : 10, addr : '서울'},
    {id : 5, name : '노홍철', age : 10, addr : '서울'},
    {id : 6, name : '길', age : 40, addr : '인천'}
]

let data1=[]; //조건에 맞는 결과 담기 push사용
// for문+if문 주소가 수원 배열 객체 출력

for(let i=0; i<data.length; i++){
    if(data[i].addr==='수원'){
        data1.push(data[i])
    }
}
console.log(data1);

let data2=data.filter(function(x){
    // x : {id : 1, name : '유재석', age : 20, addr : '서울'}
    return x.addr === '수원';
})
console.log(data2);

let data3 = data.filter(y=>y.addr==='수원');
console.log(data3);

// 나이가 20 이상만
let data4 = data.filter(function(z){
    return z.age>=20;
})
// let data4 = data.filter(z=>z.age>=20); 
console.log(data4);

// 정준하만 삭제
let data5 = data.filter(function(a){
    return a.name !== '정준하';
})
console.log(data5);