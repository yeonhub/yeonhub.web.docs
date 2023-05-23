// Object.freeze() : 객체 동결(수정 불가)
const arr = [10,20,30];

arr[0] = 100;
console.log(arr);

Object.freeze(arr);

arr[1] = 500;
console.log(arr);

// arr.push(300);
// console.log(arr);

const obj1 = {};
obj1.title = "점심메뉴리스트";
console.log(obj1);
obj1.title = "저녁메뉴리스트";
console.log(obj1);
Object.freeze(obj1);
obj1.title = "아침메뉴리스트";
console.log(obj1);