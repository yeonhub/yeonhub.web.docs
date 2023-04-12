'use strict';

const fn = num =>{
    console.log(`${num} 호출`);
    num--;
    if(num==0){
        console.log(`${num} 호출 중단`)
        return
    }
    fn(num);
}
fn(10);