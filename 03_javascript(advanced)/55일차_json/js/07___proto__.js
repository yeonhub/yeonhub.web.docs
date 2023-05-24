// 공통 부분
let ani = {
    color : 'green',
    age : 3,
    run(){
        console.log('안녕');
    }
}

let dog = {
    color : 'pink'
}
let cat = {
    color : 'orange'
}
let bird = {
    color : 'hotpink'
}

// __proto__ : 상속
dog.__proto__ = ani;
console.log(dog);
dog.run();

for(item in dog){
    console.log(item);
}
/* 
js는 프로토타입 기반 언어
프로토타입(원형) : 새로운 객체를 생성하는 프로그램 방식, 생성된 객체는 자신의 프로토타입을 갖는다.

프로토타입은 객체에 보이지 않는 숨겨진 곳에 값을 넣어놓고 꺼내서 사용할 수 있게 해준다.
*/

let a = Object.keys(cat);
let b = Object.values(cat);

console.log(a, b);

for(item in cat){
    if(cat.hasOwnProperty(item)) console.log('원본 : ', item);
    else console.log('상속 : ', item);

}