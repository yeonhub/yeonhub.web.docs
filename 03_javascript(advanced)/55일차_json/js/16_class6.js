class HelloWorld {
    constructor(){
        this.message = null
    }
    printHello(){
        console.log(this.message);
    }
    msg1(){
        this.message = 'HI'
    }
    msg2(){
        this.message = 'BYE'
    }
}

const hello = new HelloWorld();
hello.msg1();
hello.printHello();
console.log();
hello.msg2();
hello.printHello();