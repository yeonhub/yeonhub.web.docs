import React, { useState } from 'react';

const Am = () => {
    const [txt, setTxt] = useState('')
    const changeTxt = (e) => {
        setTxt(e.target.value)
    }
    return (
        <div style={{ margin: '30px' }}>
            <p>
                <input style={{
                    height: 50,
                    width: 150,
                    fontSize: '20px'
                }} type="text"
                    onChange={changeTxt}
                    value={txt}
                />
                <button style={{
                        marginLeft: '10px',
                        height: 50,
                        width: 50,
                        border: 'none',
                        backgroundColor: 'tan',
                        fontWeight: 700,
                        fontSize: '15px'
                    }}
                        disabled = {txt.length >= 6 ? false : true}
                    >BTN</button>
            </p>
            <h2 style={{
                marginTop: '10px',
                fontSize: '30px'
            }}>글자수 : {txt.length}</h2>
        </div>
    );
};

export default Am;