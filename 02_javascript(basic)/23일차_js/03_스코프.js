'use strict';

function fn1(){
    let a1 = '유재석';
    const subA = function(){
        console.log('강호동');
    }
    console.log(a1);
    subA();
} //정의
fn1(); //호출

function fn2(){
    subA(); //호출 불가능
    console.log(a1); //호출 불가능
}
fn2();