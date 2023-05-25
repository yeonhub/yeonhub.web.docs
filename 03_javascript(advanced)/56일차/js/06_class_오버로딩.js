class Person {
    constructor(name, kor, eng) {
        this.name = name
        this.kor = kor
        this.eng = eng
    }
    sum() {
        return (this.kor + this.eng)
    }
}
class Man extends Person{
    constructor(name, kor, eng, mat){
        super(name, kor, eng)
        this.mat = mat
    }
    sum(){
        // return (this.kor+this.eng+this.mat)
        // 부모 값을 그대로 사용하고 싶을 때 오버로딩
        return (super.sum()+this.mat)
    }
}
const person = new Person('윤파일', 60, 70)
console.log(`총점 : ${person.sum()}`);

const man = new Man('김편집', 80, 90, 70)
console.log(`총점 : ${man.sum()}`);