'use strict';

// 블록스코프 : {} 지역변수, 함수스코프

if(true) {
    var a1 = '변수선언1 var';
    let a2 = '변수선언 let';
    /* function fn1(){
        console.log('선언적함수');
    }
    fn1(); */
    const fn2 = function(){
        console.log('익명함수');
    }
    const fn3 = () => {
        console.log('화살표함수');
    }
    (function(){
        console.log('즉시실행함수');
    })();
}
if(true) {
    // console.log(`a1 : ${a1}`);
    // console.log(`a2 : ${a2}`); //밖에서 호출 불가능
    // fn1();
}