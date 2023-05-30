class MyClass {
    count = 0;
    constructor(name){
        this.name = name
    }
    // 증가
    increment(){
        this.count = this.count + 1
    }   
    // 감소
    decrement(){
        this.count = this.count - 1
    }
    show(){
        console.log(this.count);
    }
}
const m1 = new MyClass('최');
m1.increment();
m1.show();
m1.name = '박';
m1.increment();
m1.show();
m1.name = '이';
m1.increment();
m1.show();