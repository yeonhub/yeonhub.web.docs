'use strict';
// 산술 : 계산 결과 + 연결 연산자
let num1 = 10, num2 = 20, result = 0;
result = num1 + num2;
console.log('합 : %d ', result );

result = num1 - num2;
console.log('차 : %d ', result);

result = num1 * num2;
console.log('곱 : %d ', result);

result = num1 / num2;
console.log('몫 : %d ', result);

result = num1 % num2;
console.log('나머지 : %d ', result);



/* 
    산술연산자 : +, -, *, /, %(나머지 값)
    관계연산자 : >, <, >=, <= 
                ==(값 비교)
                ===(값+타입 비교)
                !=(값 다름)
                !==(값+타입 다름)
    논리연산자 : &&(and, 범위 설정)
                ||(or)
                ! (not)
                !true - false
                !false - true
    대입연산자 : (=) +=, -=, *=, /=, %=, 연산자=
    증감연산자 : ++, -- : 1씩 증감
                ++변수 : 전위형
                변수++ : 후위형
    삼항(조건)연산자 : (조건) ? (참결과) : (거짓 결과)
*/