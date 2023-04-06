// let a = 'test'; 
// 일치
// let a = 1234;
// 일치
// let a = 1;
// 일치
// let a = 0;
// 불일치
// let a = '';
// 불일치

/* 
    if(변수) 변수=존재 or true or 1 =>true 출력
    if(변수) 변수=존재X or false or 0 or '' =>false 출력
*/

let a = 0 ;
if(a) {
    console.log('일치');
} else {
    console.log('불일치');
}

