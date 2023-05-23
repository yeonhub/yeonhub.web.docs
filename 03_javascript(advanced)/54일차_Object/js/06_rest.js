// 나머지 매개변수, ...rest, ...사용자 정의 이름

const make = (...rest) =>{
    console.log(rest);
}
// make();
// make('김');
// make('이','박','최','정');

const make1 = (...names) =>{
    console.log(names);
}
// make1()
// make1('김');
// make1('이','박','최','정');

const make2 = (...names) =>{
    names.forEach(item=>console.log(item));
}
// make2()
// make2('김');
// make2('이','박','최','정');

// 변수와 같이 사용할 경우 ...rest는 맨 마지막에 작성
const add = (name, ...nums) => {
    let sum = 0;
    nums.forEach(item=>sum+=item);
    console.log(sum);
};
// add('봉', 10,20,30,40);

const add1 = (name, ...nums) => {
    let sum = 0;
    sum = nums.reduce((prev, curr)=>prev+curr);
    console.log(sum);
};
add1('윤', 11,22,33,44);

const sum = (...rest) => {
    console.log(rest);
    let sum = 0;
    for(let item of rest) {
        sum += item;
    }
    return sum;
}
const arr1 = [10,20,30,40,50,60];
// console.log(sum(...arr1));

console.log(Math.min(...arr1));
console.log(Math.max(...arr1));