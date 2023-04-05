'use strict';

let name = '홍길동';
const age = 20;
let addr = '인천';


// + 로 연결
// 이름은 홍길동이고 나이는 20살 이며 주소는 인천입니다.

console.log('이름은 '+name+'이고 나이는 '+age+'살 이며 주소는 '+addr+'입니다.');
console.log();
console.log('이름은 ',name,'이고 나이는 ',age,'살 이며 주소는 ',addr,'입니다.');
console.log();

// %s = 문자열, %d = 숫자
console.log('이름은 %s이고 나이는 %d살 이며 주소는 %s입니다.', name, age, addr);
console.log();

// 문자열 출력 \', \", \t, \\
let msg = '\'안녕하세요\' 저는 \"홍길동\"입니다\t\t 나이는 20살\\이고 주소는 인천입니다.'
console.log(msg);