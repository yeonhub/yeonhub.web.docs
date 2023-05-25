// getter
class Make {
    constructor(arr=[]) { // 배열 형식 초기값 생략 가능
        this.arr = arr
    }
    get nums(){
        return this.arr.length ? 'Y' : null;
    }
    set nums(value){
        return [value, ...this.arr]
    }
}
const make = new Make([10, 20])
console.log(make.nums);

const make2 = new Make();
console.log(make2.nums);

make.nums = 500;
console.log(make.nums);
console.log(make.arr);