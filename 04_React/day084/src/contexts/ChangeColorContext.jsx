import { createContext, useState } from "react";

export const ChangeColorContext = createContext()

const ChangeColorProvider = (props) => {
    const [color, setCoolr] = useState('tomato')
    const onColor = (color) => {
        setCoolr(color)
    }

    return (
        <ChangeColorContext.Provider value={{ color, onColor }}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;