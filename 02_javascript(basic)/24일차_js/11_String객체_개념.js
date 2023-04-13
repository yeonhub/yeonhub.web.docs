'use strict';

/* 
String : 문자열 내장 객체, 첫 글자는 반드시 대문자로 시작
typeof : string
String.속성
String.메서드()

형식1)
let 변수 = new String('문자열...') : object
let 사용자 정의 객체명 = new String('문자열...')

형식2) 많이 사용
let 변수 = '문자열' : string
변수.속성
변수.메서드 : 객체의 성격으로 사용 가능

*/

const str1 = new String('안녕하세요 만나서 반가워요.');
console.log(typeof str1); //object
console.log(str1.length); //15(공백 포함)

const str2 = '지금은 오후 1시'
console.log(typeof str2); //string
console.log(str2.length); //9
