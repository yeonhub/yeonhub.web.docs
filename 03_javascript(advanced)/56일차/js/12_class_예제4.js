// 이름 , 국어, 영어 - 생성시 입력받기
// 클래스명 : Person
// 메소드 : total()  -> 변수 sum 합누적
// 메소드 : hak()    -> 변수 avg 평균, grade 학점
// 출력결과
// xxx의 총점 : xx
// xxx의 학점 : xx
// 총인원은 x명이고 총점은xx이고 반평균은 xx입니다

class Person {
    constructor(name, kor, eng) {
        this.name = name
        this.kor = kor
        this.eng = eng
    }
    total() {
        let sum = this.kor + this.eng
        console.log(`${this.name}의 총점 : ${sum}`);
    }
    hak() {
        let avg = (this.kor + this.eng) / 2
        if (avg > 80) console.log(`${this.name}의 학점 : A`);
        else if (avg > 70) console.log(`${this.name}의 학점 : B`);
        else if (avg > 60) console.log(`${this.name}의 학점 : C`);
        else console.log(`${this.name}의 학점 : D`);
    }
}

const arr = [
    { name: '김', kor: 50, eng: 70 },
    { name: '이', kor: 60, eng: 80 },
    { name: '박', kor: 80, eng: 90 }
]
let stu = []
let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
    stu[i] = new Person(arr[i].name, arr[i].kor, arr[i].eng)
    totalSum += (arr[i].kor + arr[i].eng)
}

stu[0].total();
stu[1].total();
stu[2].total();
console.log();
stu[0].hak();
stu[1].hak();
stu[2].hak();
console.log();
console.log(`총 인원 : ${stu.length}명`)
console.log(`총점 : ${totalSum}점`)
console.log(`평균 : ${totalSum / (stu.length * 2)}점`)