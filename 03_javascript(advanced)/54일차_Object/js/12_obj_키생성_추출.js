const obj = {
    name : '김',
    age : 40
}

// 존재하지 않는 값 : undefined
// console.log(obj.addr);

// 키 생성
obj.addr = '서울';
obj.id = 1;
// console.log(obj);
// console.log(obj.addr);
// console.log(obj.id);

// 빈 객체
const myObj = {};
for (let i = 0; i < 10; i++) {
    const key = "name" + i;
    myObj[key] = '홍길동' + Math.floor(Math.random()*50);
}
// console.log(myObj);

// 키 추출(for in만 사용 가능)
for(let item in obj){
    console.log(item);
}
// for(let item of obj){
//     console.log(item);
// }
// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }