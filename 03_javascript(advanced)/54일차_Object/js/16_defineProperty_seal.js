const obj = {
    name : '라면',
    state : '좋음',
    brand : '농심'
}

Object.defineProperty(obj, 'cal', {
    value : 200,
    // 수정 가능 여부
    writable : false
})

console.log(obj);
console.log(obj.cal);

obj.title = "신라면";
console.log(obj);

// seal 수정가능, 삭제+추가 불가능
Object.seal(obj)
obj.title = '오뚜기';
console.log(obj);
