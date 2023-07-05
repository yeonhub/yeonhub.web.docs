import { useState } from "react";

// 상태, 이벤트 함수
export const useCounter = (initialState = 100) => {
    const [state, setState] = useState(initialState)
    const onIncre = () => {
        setState(state + 1)
    }
    const onDecre = () => {
        setState(state - 1)
    }
    const onReset = () => {
        setState(0)
    }
    return { state, onIncre, onDecre, onReset }
};

/* 
    use + 명령어 : 훅
    사용자 정의 훅 (함수)
*/