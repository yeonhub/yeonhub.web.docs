// class (java와 비슷)
// static : 정적메소드 (클래스에서 직접 값을 넘기고 가져올 수 있다)

class Human {
    name
    kor
    eng
    constructor({ name, kor, eng }) {
        this.name = name
        this.kor = kor
        this.eng = eng
    }
    static sum(...obj) {
        return obj.reduce((acc, curr) => acc + (curr.kor + curr.eng), 0)
    }
}
const arr = [
    new Human({ name: '김', kor: 80, eng: 90 }),
    new Human({ name: '이', kor: 100, eng: 50 })
]
console.log(Human.sum(arr[0], arr[1]));