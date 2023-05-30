/* 
try...catch 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정합니다.
*/

const abc = () =>{
    console.log('HELLO');
}
try {
    // 실행값
    abc()
    ab()
} catch(e){
    // 에러 발생
    console.log(e);
    console.log();
    console.log(e.name);
    console.log(e.message);
    console.log('error 발생');
}