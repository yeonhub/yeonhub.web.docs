// 이름, 나이, 지역 기본값
// color(머리색)
// weight(몸무게)

class Human {
    constructor(name, age, addr) {
        this.name = name
        this.age = age
        this.addr = addr
        console.log(`생성자 실행 : ${this.name}(이름) ${this.age}(나이) ${this.addr}(지역)`);
    }
    color(target) {
        console.log(`${this.name}(이름) ${this.age}(나이) ${target}(색)`);
    }
    weight(target) {
        console.log(`${this.name}(이름) ${this.age}(나이) ${target}(몸무게)`);
    }
}
const man = new Human('우기명', 20, '서울')
man.color('orange')
man.weight(60)

const arr = [
    new Human('최기명', 10, '인천'),
    new Human('박기명', 15, '수원'),
    new Human('김기명', 30, '안산')
]
console.log(arr.length, '명');

for(let item of arr){
    item.color('blue')
    item.weight(70)
}