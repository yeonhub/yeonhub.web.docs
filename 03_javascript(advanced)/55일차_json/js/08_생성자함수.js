/* 
생성자 함수
1. 함수명 첫 글자는 대문자
2. new 함수명() - return이 없어도 반환
사용할 수 있는 객체생성코드로 구현
일반함수식과 동일 : 재사용하기 위해
class 전에 많이 사용

function 함수명(){

}
const 변수 = new 함수명();
*/

function Man(){
    this.name = '박'
    this.age = 33
}

let man1 = new Man();
let man2 = new Man();
console.log(man1.name, man1.age);
console.log();
console.log(man2.name, man2.age);

const User = function(id, email){
    this.id = id;
    this.email = email;
}
const foo = new User('aaa', 'aaa@gmail.com');
const foo2 = new User('bbb', 'bbb@gmail.com');

console.log(foo.id, foo.email);
console.log(foo2.id, foo2.email);