const num = 200;
const make1 = () => {
    return 300;
}
const make2 = (x, y) => {
    return x + y;
}
const make3 = (x, y) => {
    return x * y
}
class Person {
    constructor(name) {
        this.name = name
    }
}
const obj = {
    name: '김', age: 30, addr: '서울'
}
const arr = [10, 20, 30, 40]

export { num, make1, make2, Person, obj, arr }

export default make3