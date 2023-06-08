import React, { useState } from 'react';

const Test5 = () => {
    const [bgColor, setBgColor] = useState('pink')
    // const onBgcolor=()=>{
    //     if(bgColor==='pink'){
    //         setBgColor('tomato')
    //     } else {
    //         setBgColor('pink')
    //     }
    // }
    const onBgcolor = () => {
        setBgColor(bgColor === 'pink' ? 'tomato' : 'pink')
    }
    return (
        <div style={{ margin: '30px' }}>
            <div onClick={onBgcolor}
                style={{ width: 300, height: 100, fontSize: 40, lineHeight: '100px', padding: 20, border: '1px solid black', backgroundColor: bgColor, textAlign: 'center' }}
            >pink</div>
        </div>
    );
};

export default Test5;