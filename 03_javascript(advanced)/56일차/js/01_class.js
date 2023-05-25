// 클래스와 인스턴스
// 같은 형식의 객체변수를 만들 때 사용함

class HelloWorld {
    // 클래스 안에 let, const 사용 불가능
    message = null;
    constructor() {
    }
    sayHello() {
        console.log(this.message);
    }
    setKor() {
        this.message = '안녕';
    }
    setEng() {
        this.message = 'HI'
    }
}

const x = new HelloWorld();
x.setKor();
x.sayHello();
x.setEng();
x.sayHello();

console.log();

class Person {
    name = null;
    age = 0;
    addr
    constructor(name, age, addr) {
        // 멤버변수(필드)
        this.name = name;
        this.age = age;
        this.addr = addr;
    }
    // 메서드, 함수
    getName() {
        return `${this.name}(이름), ${this.age}(나이), ${this.addr}(주소)`
    }
}
const p = new Person('김만덕', 30, '서울');
console.log(p.getName());

const p2 = new Person();
p2.name = '임만덕';
p2.age = '10';
p2.addr = '부산';
console.log(p2.getName());