class Ani {
    name
    age
    constructor(name) {
        this.name = name
        this.age = 3
    }
    run() {
        console.log(`${this.name} 달린다`);
    }
    eat() {
        console.log(`${this.name} 먹는다`);
    }
}
class Dog extends Ani {
    constructor(...arg) { //생략 가능, ...arg = 사용자 임의 정의
        super(...arg)
    }
    // 메서드 추가
    sleep() {
        console.log(`${this.name} 잔다`);
    }
}
class Cat extends Ani {
    swim() {
        console.log(`${this.name} 수영한다`);
    }
    // run 재정의
    run() {
        console.log(`${this.name} 고양이처럼 달린다`);
    }
}
const d = new Dog('멍멍이');
const c = new Cat('야옹이');
d.run();
d.eat();
d.sleep();
c.run();
c.eat();