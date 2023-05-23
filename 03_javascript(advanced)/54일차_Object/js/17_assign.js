let arr = [10, 20, 30];
let arrCopy = arr;
// 객체의 참조값(메모리 주소)만 복사

arr[0] = 100;

console.log(arr);
console.log(arrCopy);

let user = {
    name : '김',
    age : 20
}

const newUser = Object.assign({}, user)
// const 새이름 = Object.assign(빈객체, 대상객체)
user.name = '박';
console.log(newUser);
console.log(user);


let a1 = {name : '최'};
let a2 = {age : 20};
let a3 = {addr : '서울'};

let a4 = Object.assign(a1, a2, a3);

console.log(a4);