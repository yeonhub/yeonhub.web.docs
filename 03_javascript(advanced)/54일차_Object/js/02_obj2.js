const obj2 = {
    name : '김코딩',
    age : 30,
    addr : '서울',
    tel : '010-4444-5555',
    go : function(){
        console.log(`${this.name}은 잠을 잔다.`);
    }
}

console.log(obj2.name, obj2.age, obj2.addr, obj2.tel);
obj2.go();
console.log(obj2['name'], obj2['age'], obj2['addr'], obj2['tel']);

function getObj(){
    return {
        firstName : '만덕',
        lastName : '김',
        age : 22,
        addr : '인천',
        ['email'] : 'kmddddd@gmail.com',
        ['tel'] : '010-4222-3333'
    }
}

console.log(getObj);
console.log();
console.log(getObj());