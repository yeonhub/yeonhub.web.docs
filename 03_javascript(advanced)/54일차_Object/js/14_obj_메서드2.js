const obj = {
    a : 10,
    b : 20,
    c : 30,
    d : 40,
    e : 50
};

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 예제
// 50씩 더해서 출력 (map)
let obj50 = Object.values(obj).map(item=>item+50);
console.log(obj50);
// 30이상만 출력
let ojb30 = Object.values(obj).filter(item=>item>=30);
console.log(ojb30);
// 30이상만 출력 X
let ojb30x = Object.values(obj).filter(item=>item!==30);
console.log(ojb30x);
// 100씩 더하고 reducd
let obj100 = Object.values(obj).map(item=>item+100).reduce((prev, curr)=>prev+curr);
console.log(obj100);