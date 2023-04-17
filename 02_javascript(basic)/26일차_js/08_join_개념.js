'use strict';

/* 

join() 메서드는 어떤 형식화 배열의 모든 요소를 하나의 문자열로 연결합니다

join()
join('문자')
join('-')
join('*')

매개변수: separator
배열의 각 요소를 구분할 문자열을 지정합니다. 이 separator는 필요한 경우 문자열로 변환됩니다. 생략하면 배열의 요소들이 쉼표(",")로 구분됩니다.

반환 값 : 모든 배열 요소를 연결한 문자열.

*/

let colors = ['red', 'green', 'blue', 'black'];
let str1 = colors.join();
console.log(str1, typeof str1);

let str2 = colors.join('+');
str2 = colors.join('  +  ');
str2 = colors.join('  *  ');
str2 = colors.join('  -  ');
// 아래에 추가할 경우덮어씌우기 된다 배열을 하나의 문자열로
console.log(str2, typeof str2);

let menus = ['menu1', 'menu2', 'menu3', 'menu4'];
console.log(menus.join('-'));
