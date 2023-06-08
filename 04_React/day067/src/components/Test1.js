import React from 'react';

const Test1 = () => {
    const handleClick1 = () => {
        alert('HELLO')
    }
    const handleClick2 = () => {
        alert('WORLD')
    }
    const handleClick3 = () => {
        alert('안녕 세상')
    }
    const make = (num) => {
        alert(num)
    }
    const make1 = (x, y) => {
        alert(`${x}, ${y}`)
    }
    return (
        <div style={{margin:'30px'}}>
            <p>
                <button onClick={handleClick1}>BTN1</button>
                <button onClick={handleClick2}>BTN2</button>
                <button onClick={handleClick3}>BTN3</button>
            </p>
            <p>
                <button
                    // 이벤트 실행문 작성(실행문이 간단할 때)
                    onClick={() => { console.log(4) }}
                >BTN4</button>
                <button onClick={() => console.log(5)}>BTN5</button>
                <button onClick={() => {
                    // 한 줄이상 { }로 묶어야 한다
                    console.log(6)
                    console.log(6)
                    console.log(6)
                }}>BTN6</button>
            </p>
            <p>
                {/* 
                    함수() : 처음부터 호출
                    함수를 ()로 묶어서 해결
                 */}
                <button onClick={() => make(100)}>BTN7</button>
                <button onClick={() => make1(10, 30)}>BTN8</button>
                <button>BTN9</button>
            </p>
        </div>
    );
};

export default Test1;

/* 
    JSX 영역

    <태그 이벤트={함수명}/>
    함수() : 이벤트 이전 함수 호출(값을 반환)
    <태그 이벤트={함수명()}/>
*/