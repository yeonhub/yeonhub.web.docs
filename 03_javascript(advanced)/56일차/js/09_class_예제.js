class Man {
    count = 0
    constructor(name, age){
        this.name = name
        this.age = age
    }
    get nums(){
        return this.count += 1
    }
    set nums(value){
        this.count = value
    }
}
let man1 = new Man('김', 20)
console.log(man1.nums);
man1.name = '이'
console.log(man1.nums);
man1.name = '박'
console.log(man1.nums);