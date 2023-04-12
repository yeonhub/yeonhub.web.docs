'use strict';

function make(name, age, addr){
/*     삼항연산자 이용
    addr = addr ? addr : '주소없음'; */
    console.log(`이름: ${name}, 나이: ${age}, 주소: ${addr}`);
}
make('강호동', 30, '서울');
make('유재석', 40); //주소칸이 비어있어 undefined


// 매개변수에 기본값 지정 - 옵셔널 파라미터
function make1(name='유재석', age= 50, addr='부산'){
    console.log(`이름: ${name}, 나이: ${age}, 주소: ${addr}`);
}
make1()
make1('이승기')
make1('이수근', 20)
make1('김종민', 35, '인천');

const make2=(x)=>{
    // 제곱값을 반환
    return x*x;
}
let result = make2(2);
console.log(result);