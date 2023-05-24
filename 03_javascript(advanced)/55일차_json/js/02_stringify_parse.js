let obj = {
    name : '김',
    age : 30
};
let obj1 = {
    name : '이',
    age : 20,
    addr : {
        num1 : '서울',
        num2 : '인천'
    }
};

let objCopy = obj;
obj.name = '최';

console.log(obj);
console.log(objCopy);
console.log();

objCopy = {...obj};
obj.name = '박';
console.log(obj);
console.log(objCopy);
console.log();

let obj1Copy = {...obj1};
obj1.name = '정';
obj1.addr.num1 = '수원';
console.log(obj1);
console.log(obj1Copy);
console.log();

obj1Copy = JSON.stringify(obj1);
obj1Copy = JSON.parse(obj1Copy);
obj1.addr.num1 = '부산';
console.log(obj1);
console.log(obj1Copy);
console.log();