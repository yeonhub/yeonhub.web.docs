class MyClass {
    static count = 0;
    constructor(name){
        this.name = name
    }
    // 증가
    increment(){
        MyClass.count ++
    }   
    // 감소
    decrement(){
        MyClass.count --
    }
    show(){
        console.log(MyClass.count);
    }
}
const m1 = new MyClass('최');
m1.increment();
m1.show();
m1.name = '박';
m1.increment();
m1.show();
m1.name = '이';
m1.decrement();
m1.show();