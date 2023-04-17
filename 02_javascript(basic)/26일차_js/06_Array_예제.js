'use strict';

/* 
    1. 사과 : 10
    2. 배 : 20
    3. 수박 : 30
    4. 참외 : 50

    할인율 0.2

    계산식 : 사과 개수 * 사과 개수 * 0.2
            배 개수 * 배 개수 * 0.2
            ...

    1. 배열 : arr = [10, 20,...]
    2. 할인율 : m = 0.2;
    3. make() + return
    4. 총 누적 : total
*/

function make(data, x) {
    let total = 0;
    for(let y of data){
        total+=y*y*x
    }
    return total;
}
let arr = [10, 20, 30, 50];
let m = 0.2;
let z = make(arr, m);
console.log(`총 누적값 : ${z}`)