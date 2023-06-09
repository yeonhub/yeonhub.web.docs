/* 반복문 : 연속으로 처리, 횟수(몇 번) 반복
for
while
do~while

1. for : 횟수를 정할 때 사용
    for( let 초기값 ; 최종값 ; 증감식 ) {
        실행문
    }
    1) 초기값 : 시작값 변수는 i, j, k 순서대로, let 생략시 전역변수로 인식 {}스코프 : 지역변수
    2) 최종값 : ~까지 true/fasle값만 나옴 관계, 논리+산술
    3) 증감식 : ++, --, 수식

    // 무한 반복
    for( ; ; ) {실행문}
    // 횟수 정해질 때
    for( 초기값 ; 최종값(조건식) ; 증감식) {실행문}

2. while : 주로 무한 반복할 때
    // ~까지 반복, 횟수
    초기값 ;
    while( 조건식 ) {
        실행문
        증감식
    }
    //무한 반복
    while(true) : 무한 반복

3. do~while : 1번 실행, 많이 사용하진 않는다
    초기값 ;
    do {
        실행문
        증감식
    } while( 조건식 )
    











*/