import React, { useMemo } from 'react';

const getColor = color => {
    console.log('getColor');
    switch (color) {
        case 'red': return '빨강'
        case 'green': return '초록'
        case 'blue': return '파랑'
        default: return '존재하지 않는 색'
    }
}
const getFruit = fruit => {
    console.log('getFruit');
    switch (fruit) {
        case 'apple': return '사과'
        case 'orange': return '오렌지'
        case 'mango': return '망고'
        default: return '존재하지 않는 과일'
    }
}

const Test3sub = ({ color, fruit }) => {
    const colorInfo = useMemo(() => {
        return getColor(color)
    }, [color])
    const fruitInfo = useMemo(() => {
        return getFruit(fruit)
    }, [fruit])

    return (
        <div>
            <hr />
            <h3>select color : {color}</h3>
            <h3>text : {colorInfo}</h3>
            <hr />
            <h3>select fruit : {fruit}</h3>
            <h3>text : {fruitInfo}</h3>
        </div>
    );
};

export default Test3sub;