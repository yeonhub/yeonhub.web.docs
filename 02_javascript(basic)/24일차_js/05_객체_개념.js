'use strict';
/* 
객체 : 각종 사물(보고 만지고 느낄 수 있는 모든 사물)
속성(키) : 고유값
메서드() : 모든 행동(뒤에 괄호()가 붙음)
속성+메서드 : 멤버

ex)
객체 : 강아지
강아지.키 = 종, 색, 나이, 성별...
강아지.메서드() = 달리기, 짖기, 걷기...

객체 : 객체를 컴퓨터 언어로 변경한 것
키 : 객체의 고유한 기능, 특징
메서드() : 객체의 동작

형식)
let 객체명 = {
    키 : 값(숫자, 문자, 배열, 객체 등),
    키 : 값,
    키 : 값,
    키 : 값,
    메서드 : function() {
        할 일
    }
}
객체명.키 / 객체명['키']
객체명.메서드()

*/

let colors = {
    red : 'red',
    green : 'green',
    blue : 'blue'
}

let gold = 'gold';
colors[gold] = gold;

// 객체명은 변수규칙과 동일하다
console.log(`colors객체명 안에 red키 값 : ${colors.red}`);
console.log(`colors객체명 안에 green키 값 : ${colors['green']}`);
console.log(`colors객체명 안에 blue키 값 : ${colors['blue']}`);
console.log(`colors객체명 안에 gold키 값 : ${colors['gold']}`);