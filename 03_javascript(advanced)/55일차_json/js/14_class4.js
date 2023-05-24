class MemberClass {
    // 생성자 함수
    constructor(){
        // this.변수 = 멤버변수
        this.userName = null
        this.email = null
    }
    // class의 멤버변수 사용할 경우 this
}
// 클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
m1.userName = '최';
m1.email = 'cc99@gmail.com';
console.log(m1);
console.log();

const m2 = new MemberClass();
m2.userName = '진';
m2.email = 'jj88@gmail.com';
console.log(m2);