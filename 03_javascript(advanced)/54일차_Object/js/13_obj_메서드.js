/* 
메서드
Object.keys() : 속성(키)
Object.values() : 값
Object.entries() : 키/값 배열 처리
Object.fromEntries() : 키/값 객체 처리
*/

const user = {
    name : '김',
    age : 10,
    addr : '서울',
    sex : 'male' 
}

const arr = [
    ['name','김'],
    ['age',10],
    ['addr','서울']
]

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log();
console.log(arr);
console.log(Object.fromEntries(arr));