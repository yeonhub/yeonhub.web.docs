/* 
전개연산자, 스프레드연산자, 펼치기 연산자
...전개연산자
[], {} 양쪽의 형태를 제거하고 안에 내용만 가져오기
{값} => 객체안에 값만 복사
*/

const names = [
    '김옥지',
    '이옥지',
    '박옥지',
    '최옥지',
    '윤옥지'
];
const foods = [
    '삼겹살',
    '우삼겹',
    '갈비살',
    '뒷고기'
];

// 새로운 배열
console.log(names.concat());
console.log([...foods]);
console.log(names.concat('강호동', '유재석').concat(foods));
console.log([...names, ...foods]);
console.log([...names, '김만득', '최만득', ...foods]);

const dog = {name : '시바이누', age : 2 , addr : '서울'};
const dog1 = {...dog};

console.log(dog1);
console.log();

// Object : ...이름, 키:값 = 수정
const dog2 = {...dog, name : '말티즈', age : 1 , addr : '인천'};
console.log(dog2);

const data = [
    {id : 1, name : '김'},
    {id : 2, name : '이'},
    {id : 3, name : '박'},
    {id : 4, name : '최'},
    {id : 5, name : '정'}
];

// 새로운 배열
const data1 = data.concat();
console.log(data1);
const data2 = [...data];
console.log(data2);
const data3 = data.concat({id : 5, name : '윤'});
console.log(data3);

// 데이터 추가
const data4 = [...data, {id : 5, name : '진'}];
console.log(data4);

// map - id/name (forEach 개념)
console.log(data1.map(item => {
    return `${item.id} / ${item.name}`
}));

console.log(data1.map(item => `${item.id} / ${item.name}`));