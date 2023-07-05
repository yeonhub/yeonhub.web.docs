import { createContext, useState } from "react";

// 관리자
export const CountContext = createContext()

const CountProvider = (props) => {
    const [cnt, setCnt] = useState(0)
    const onUp = () => setCnt(cnt + 1)
    const onDown = () => setCnt(cnt - 1)
    return (
        <CountContext.Provider value={{cnt, onUp, onDown}}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;