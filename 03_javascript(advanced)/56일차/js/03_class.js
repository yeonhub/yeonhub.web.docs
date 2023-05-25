class Person{
    constructor(obj){
        // 비구조할당(구조분해)
        let {name, age} = obj
        this.name=name
        this.age=age

    // constructor({name, age}){
    //     this.name=name
    //     this.age=age
        
        // this.name=obj.name
        // this.age=obj.age
    }
    getInfo(){
        return `${this.name}(이름), ${this.age}(나이)`
    }
}
const per = new Person({name : '김메기', age : 40})
console.log(per.getInfo());

const obj1 = {name : '최메기', age : 20}
const x = new Person(obj1)
console.log(x.getInfo());

const obj2 = {name : '이메기', age : 10}
const y = new Person({...obj2}) // {...obj2} = name : '이메기', age : 10
console.log(y.getInfo());