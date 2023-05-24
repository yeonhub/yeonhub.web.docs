class Ani {
    constructor(color) {
        this.color = color
        this.age = 4
    }
    run() {
        console.log('달리기');
    }
    eat() {
        console.log('밥 먹기');
    }
}
// Ani(속성,메서드) -> Dog 상속

class Dog extends Ani {
    /*
    기본문법(생략)
    constructor(...args){
        super(...args)
    }
    */
   sleep(){
    console.log('잠자기');
   }
}

const dog = new Dog('pink');

console.log(dog.color, dog.age);
dog.run();
dog.eat();
dog.sleep();