// 상속
class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    getInfo(){
        return `${this.name}는 ${this.color}입니다`
    }
}
// sub class
class Friend extends Animal{
    // 값 추가시 props자리에 작성 / constructor 생략 가능
    constructor(name, color){
        // 부모의 변수
        super(name, color);
    }
}
const dog = new Friend('강아지', '갈색');
const cat = new Friend('고양이', '흰색');
console.log(dog.getInfo());
console.log(cat.getInfo());
console.log();

// 생성자 이름 확인
console.log(dog.constructor.name);
console.log(cat.constructor.name);

console.log(dog instanceof Friend);
console.log(cat instanceof Friend);
console.log(dog instanceof Animal);
console.log(cat instanceof Animal);