// 목록구조
let obj = {
    name : '김',
    age : 40,
    addr : "서울"
};
let obj2 = {
    name : '이',
    age : 30,
    addr : "수원"
};

const classObj = {
    list : [
        {
            name : '김',
            age : 40,
            addr : "서울"
        },
        {
            name : '이',
            age : 30,
            addr : "수원"
        }
    ]
}

console.log(classObj);

// 예제
// for문(콘솔.그룹) 사용 이름, 나이, 주소
for(let i = 0; i<classObj.list.length; i++){
    console.group('출력');
    console.log(classObj.list[i].name);
    console.log(classObj.list[i].age);
    console.log(classObj.list[i].addr);
    console.groupEnd();
}