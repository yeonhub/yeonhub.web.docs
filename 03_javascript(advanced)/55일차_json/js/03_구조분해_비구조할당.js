/* 
구조분해
구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
*/

let arr = ['김', '이', '박'];
let a1 = arr[0];
let a2 = arr[1];
let a3 = arr[2];
console.log(a1,a2,a3);

let [n1, n2, n3] = ['김', '이', '박'];
console.log(n1, n2, n3);

let [a, [b, c]] = [10, [20, 30]];
console.log(a, b, c);

let [num1, ...nums] = [40,50,60];
console.log(num1,nums);
// 배열 형식으로 출력

const {cc, dd} = {
    cat : '고양이',
    dog : '강아지'
}
console.log(cc, dd);
// 객체는 사용자 정의 불가능, cat, dog로 사용