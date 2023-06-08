import React, { useState } from 'react';
const Test3 = () => {
    const [name, setName] = useState('unknown')
    const [color, setColor] = useState('default')
    const [age, setAge] = useState(0)

    const onName1 = () => {
        setName('김')
    }
    const onName2 = () => {
        setName('이')
    }
    const onName3 = () => {
        setName('박')
    }

    const onColor1 = () => {
        setColor('pink')
    }
    const onColor2 = () => {
        setColor('orange')
    }
    const onColor3 = () => {
        setColor('tomato')
    }
    return (
        <div style={{ margin: '30px' }}>
            <h2>name : {name}</h2>
            <h2>age : {age}</h2>
            <h2 style={{ backgroundColor: color, width: '200px' }}>color : {color}</h2>
            <p>
                <button onClick={onName1}>김</button>
                <button onClick={onName2}>이</button>
                <button onClick={onName3}>박</button>
            </p>
            <p>
                <button onClick={() => { setAge(10) }}>10</button>
                <button onClick={() => { setAge(20) }}>20</button>
                <button onClick={() => { setAge(30) }}>30</button>
            </p>
            <p>
                <button onClick={onColor1}>pink</button>
                <button onClick={onColor2}>orange</button>
                <button onClick={onColor3}>tomato</button>
            </p>
        </div>
    )
};
export default Test3;

/*  
    import React, { useState } from 'react';
    const [변수, 변수값을 변경해 주는 함수] = useState(0);
    
    const [num, increment] = useState(초기값);
    const [상태 데이터, setter함수] = useState(초기값);

    const [count, setCount] = useState(초기값);
    초기값 : 숫자, 문자, 객체, 배열 등
    count : 초기값
    setCount(수식, 값)
    const [count, setCount] = useState(1);
    count = 1
    setCount(count+1) => 1+1 => count
    count = 2

    useState : 값이 변경될 때 (값을 유동으로 변경해야할 때)
*/