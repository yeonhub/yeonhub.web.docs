import { createContext, useState } from "react";

export const CntContext = createContext()

const CntProvider = (props) => {
    const [cnt, setCnt] = useState(1)
    // const increment = step => {
    //     step ? setCnt(cnt+step) : setCnt(cnt+1)
    // }
    // const decrement = step => {
    //     step ? setCnt(cnt-step) : setCnt(cnt-1)
    // }
    const increment = (step = 1) => {
        setCnt(cnt + step)
    }
    const decrement = (step = 1) => {
        setCnt(cnt - step)
    }
    return (
        <CntContext.Provider value={{ cnt, increment, decrement }}>
            {props.children}
        </CntContext.Provider>
    );
};

export default CntProvider;