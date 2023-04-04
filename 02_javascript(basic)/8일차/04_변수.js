// 한 줄 주석 ctrl+/
/* 여러줄 주석 alt+shift+a */
/* 
    변수
    변하는 값을 저장한는 저장 공간(메모리)
    문자, 숫자, 논리값(true/false)
    id, pw, 주소, 정보 등 담기
    
    형식
    var 변수명 = 값 (사용X)
    let 변수명 = 값
    const 변수명 = 값

    let : 값 변경 O
    const : 값 변경 X (상수값)

    이름 규칙
    1. 영문자, 숫자, _, $ 혼용
    2. 첫글자는 숫자를 제외 주로 영소문자
        대문자 시작은 주로 클래스명 쓸 때
    3. 한글 가능(사용X), 특수문자, 공백 사용 불가
    4. 대소문자 구별
    5. 두 단어 합칠 때
        dog_cat : 스네이크 표기법
        dogCat : 카멜(낙타) 표기법
    6. 이름은 값을 알아볼 수 있는 영문으로 작성

    변수 = 값
    그릇1 = 물 : 대입, 치환
    그릇2 = 밥
    그릇3 = 국
    그릇4 = 음료
*/

var num1 = 100;
console.log(num1);

let num2 = 200;
console.log(num2);

let num3 = 300;
console.log(num3);

const num4 = 400;
console.log(num4);