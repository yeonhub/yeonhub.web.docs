'use strict';

let data = [
    {id : 1, name : '유재석', age : 20, addr : '서울'},
    {id : 2, name : '정준하', age : 30, addr : '수원'},
    {id : 3, name : '정형돈', age : 30, addr : '수원'},
    {id : 4, name : '하하', age : 10, addr : '서울'},
    {id : 5, name : '노홍철', age : 10, addr : '서울'},
    {id : 6, name : '길', age : 40, addr : '인천'}
]

let data3 = data.map(function(x, y){
    if(x.age===30){

        x.age+=10;
        return x;
    } else {
        return x;
    }
});
console.log(data3);
