'use strict';

// 재귀함수 : 함수 안에서 자기 자신을 호출하는 함수

let cnt = 1;

const fn=()=>{
    console.log(`${cnt}번 호출`);
    cnt++;
    if(cnt>5){
        return;
    }
    fn();
}
fn();
console.log(cnt);