class Man {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        // this.names = `${firstName}${lastName}`
    }
    get names(){
        return `${this.firstName}${this.lastName}`
    }
    set names(value){
        [this.firstName, this.lastName]=value.split(' ')
    }
}
const man = new Man('홍','길동')
man.names = '김 길동'
console.log(man.names);
console.log(man);