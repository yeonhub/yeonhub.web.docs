'use strict';

//콜백함수 : 값이 함수이고 매개변수에 전달

function make(cb) {
    let x = cb();
    console.log(`${x} 철수야`)
}
function fn1() {
    return '안녕';
}
function fn2() {
    return '잘가';
}
make(fn1);
make(fn2);

const fn3=(name)=>{
    console.log(`${name} 콜백함수 호출`)
}
const make1=(cb)=>{
    cb('이승기');
}
make1(fn3);