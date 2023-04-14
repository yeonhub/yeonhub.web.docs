'use strict';

let str = '안녕하세요';
console.log(`${str.length}`);
console.log(`${str.charAt(0)}`);
console.log(`${str.charAt(1)}`);
console.log(`${str.charAt(2)}`);
console.log(`${str.charAt(3)}`);
console.log(`${str.charAt(4)}`);
console.log(`===================`);

for( let i = 0; i < str.length; i++) {
    console.log(`${str.charAt(i)}`);
}
console.log(`===================`);

for (let x in str) {
    console.log(x);
}
console.log(`===================`);
for (let x of str) {
    console.log(x);
}
console.log(`===================`);
let a = 100;
console.log(a.toString().charAt(0));
// a는 숫자이고 charAt는 문자만 적용 가능하므로 toString을 사용해 문자로 변환