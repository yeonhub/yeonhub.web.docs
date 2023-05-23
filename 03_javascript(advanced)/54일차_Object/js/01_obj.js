const obj = {
    // key:value, key:value 나열
    // 숫자, boolen, null, undefined는 따옴표 작성하지 않음
    no : 1001,
    grade : 1,
    name : '홍길동',
    tel : '010-1111-4444'
}

// 기본 출력 객체.속성(객체.키)
// react 출력 객체['속성'](객체['키'])

console.group('기본 출력');
console.log('학번 : ' + obj.no);
console.log('학년 : ' + obj.grade);
console.log('이름 : ' + obj.name);
console.groupEnd();

console.log();

console.group('react 출력');
console.log('학번 : ' + obj['no']);
console.log('학년 : ' + obj['grade']);
console.log('이름 : ' + obj['name']);
console.groupEnd();