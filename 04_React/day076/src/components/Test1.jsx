import React, { useState, useMemo } from 'react';

const Test1 = () => {
    const [cnt1, setCnt1] = useState(1)
    const [cnt2, setCnt2] = useState(10)

    // 사용자 정의 함수
    const isEven = useMemo(() => {
        console.log('test');
        console.log(cnt1);
        return cnt1 % 2 === 0
    }, [cnt1])

    return (
        <div>
            <h2>COUNT1 : {cnt1}</h2>
            <button onClick={() => setCnt1(cnt1 + 1)}>+</button>
            <h2>COUNT2 : {cnt2}</h2>
            <button onClick={() => setCnt2(cnt2 + 1)}>+</button>
            <h2>
                ODD/EVEN : {isEven ? 'even' : 'odd'}
            </h2>
        </div>
    );
};

export default Test1;

/* 
    useMemo
    “생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. 
    useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 
    이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.
    (단, useMemo를 useEffect처럼 사용하지 말것)

    렌더링 될 때마다 새 값을 계산한다.
    변수, 함수, 값을 다시 생성, 계산

    훅 use+명령어

    useMemo : return값을 기억
    useCallback : 함수 기억

    문법
    useMemo(콜백함수, [의존성])
    useMemo( ()=> { }, [ ]) 한 번
    useMemo( ()=> { }, [ 변하는 값 ])
            : context(상태관리) 필수
    
    useCallback(콜백함수, [의존성])
    useCallback( ()=> { }, [ ]) 한 번
    useCallback( ()=> { }, [ 변하는 값 ])
*/