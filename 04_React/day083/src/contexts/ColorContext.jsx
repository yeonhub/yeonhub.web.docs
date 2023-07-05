import { createContext, useState } from "react";

// 1) 관리자 생성
export const ColorContext = createContext();

// 2) 변수명 변경       4) props
const ColorProvider = (props) => {
    // 6) 모든 state, function 작성
    const [color, setColor] = useState('tan')
    const onRed =()=> setColor('red')
    const onGreen =()=> setColor('green')
    const onBlue =()=> setColor('blue')
    const onBlack =()=> setColor('black')
    return (
        // 3) 공급자
        <ColorContext.Provider value={{color, onRed, onGreen, onBlue, onBlack}}>
            {/* 컴포넌트 안에 컬러 디자인 */}
            {/* <Color/> */}
            {/* 5) props.children */}
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;