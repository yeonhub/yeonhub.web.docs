import React from 'react';

const Sub = (props) => {
    return (
        <div>
            <h2>이름 : {props.name}, {typeof props.name}</h2>
            <h2>나이 : {props.age}, {typeof props.age}</h2>
        </div>
    )
}

const Test7 = () => {
    const dog = { name: '강아지', age: 2 }
    const cat = { name: '고양이', age: 4 }
    return (
        <div>
            <Sub name="김" age="20" />
            <hr/>
            <Sub name="이" age={30} />
            <hr/>
            <Sub name={dog.name} age={dog.age}/>
            <hr/>
            <Sub name={cat.name} age={cat.age} />
            <hr/>
            <Sub {...dog}/>
            <Sub {...cat}/>
        </div>
    );
};

export default Test7;