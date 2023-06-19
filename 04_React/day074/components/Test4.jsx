import React from 'react';
import styled from 'styled-components'

// scss
const Container = styled.div`
    width: 600px;
    border: 1px solid #000;
    padding: 10px;
    margin: 30px auto;
`
const Box1 = styled.article`
    padding: 20px;
    background-color: tan;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    transition: 0.3s;
    font-size: 20px;
    margin-bottom: 10px;
    &:hover {
        background-color: lightblue
    }
`
const Box2 = styled.section`
        padding: 20px;
    background-color: tan;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    transition: 0.3s;
    font-size: 20px;
    margin-bottom: 10px;
    &:hover {
        background-color: lightcoral
    }
`
const Box3 = styled('div')`
    padding: 20px;
    background-color: tan;
    border-radius: 50px;
    text-align: center;
    line-height: 50px;
    transition: 0.3s;
    font-size: 20px;
    &:hover {
        background-color: lightgreen
    }`

const Test4 = () => {
    return (
        <div>
            <Container>
                <Box1>연습</Box1>
                <Box2>연습</Box2>
                <Box3>연습</Box3>
            </Container>
        </div>
    );
};

export default Test4;

/* 
    import styled from 'styled-components'

    스타일을 위한 컴포넌트

    위 / 아래
    const 컴포넌트명 - 참조변수.태그``
    const 컴포넌트명 - 참조변수('태그')``

    const 컴포넌트명 - style.div``
    컴포넌트명을 div로 설정

    1. jsx안에 스타일 작성
    2. props를 사용할 수 있다

    해당 컴포넌트의 모든 속성을 가져와서 해당 속성을 xx
    ${ props => props.속성 }
    ${ props => props.속성 ? 참 : 거짓 }

*/