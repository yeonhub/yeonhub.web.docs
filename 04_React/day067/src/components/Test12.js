import React, { useRef } from 'react';

const Test12 = () => {
    const idRef = useRef(null)
    const pwRef = useRef()
    const onShow = () => {
        const data = {
            id: idRef.current.value,
            pw: pwRef.current.value
        }
        console.log(data);
        idRef.current.value = ''
        pwRef.current.value = ''
        idRef.current.focus()
    }

    return (
        <div style={{ margin: '30px' }}>
            {/* 학습용 (좋은 예제 아님) */}
            <input type="text" ref={idRef}/>
            <input type="text" ref={pwRef}/>
            <button onClick={onShow}>확인</button>
        </div>
    );
};

export default Test12;