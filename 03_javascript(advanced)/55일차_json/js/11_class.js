/* 
클래스
new 클래스명()
class 키워드 사용
객체지향 프로그래밍에서 사용하는 다양한 기능
객체를 정의 상태(맴버변수)
메서드(함수)로 구성
class는 객체를 생성하기 위한 템플릿

class 클래스명 {
    construtor() {
        this.맴버변수 = 값
    }
    메서드()
}
*/

class Test {
    name = '김'
    age = 10
}

const test1 = new Test();
console.log(test1.name, test1.age);

console.log('--------------------------------------');

function Man(name, age){
    this.name = name
    this.age = age
}

class User{
    // 생성자는 객체를 생성할 때 인자를 프로포트로 전달 생성
    constructor(name, age){
        this.name = name
        this.age = age
    }
    run(){
        console.log(this.name, '씨 와서 밥 먹어');
    }
};

const user = new User('박', 30);
console.log(user.name, user.age);
user.run();