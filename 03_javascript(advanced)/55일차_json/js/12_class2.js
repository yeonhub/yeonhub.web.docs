// Dog, Cat 
// color, age, run(), eat()

class Dog {
    constructor(color){
        this.color = color
        this.age = 4
    }
    run(){
       console.log('댕댕이 달리기'); 
    }
    eat(){
        console.log('댕댕이 밥 먹기');
    }
}
class Cat {
    constructor(color){
        this.color = color
        this.age = 3
    }
    run(){
       console.log('애옹이 달리기'); 
    }
    eat(){
        console.log('애옹이 밥 먹기');
    }
}

let dog1 = new Dog('pink');
console.log(dog1.color, dog1.age);
dog1.run();

console.log('----------------------------');

let cat1 = new Cat('green');
console.log(cat1.color, cat1.age);
cat1.eat();