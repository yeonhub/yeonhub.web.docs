{
    let num1 = 100;
    console.log(num1);
    {
        let num1 = 200;
        console.log(num1);
        {
            let num1 = 300;
            console.log(num1);
            {
                let num1 = 400;
                console.log(num1);
            }
            console.log(num1);
        }
        console.log(num1);
    }
    console.log(num1);
}

/* 
스코프 : 유효범위(참조범위)
블록레벨스코프: {} - 함수레벨스코프 포함
함수레벨스코프 : function 함수명(){}
전역스코프 : {}=블록 밖에 선언
지역스코프 : 해당 {}=블록 안에서만 사용 가능(주로 사용)
let은 블럭 밖으로 넘어가지 못함
var은 무시
 */