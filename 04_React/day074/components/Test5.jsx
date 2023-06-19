import React from 'react';
import styled, {css} from 'styled-components'

const Test5 = () => {
    return (
        <Container ww="400px" bg="pink">
            <Box width="120px">Test1</Box>
            <Box width="100px">Test2</Box>
            <Box width="150px">Test3</Box>
            <Box color="green">Test4</Box>
            <Box primary>Test5</Box>
        </Container>
    );
};

export default Test5;

/* 
    속성 : ${props => props.해당속성}
    속성 : ${props => props.해당속성 ? 값 : 값}
*/

const Container = styled.div`
    border: 1px solid #000;
    margin: 10px;
    padding: 10px;
    width: ${props => props.ww};
    background: ${props => props.bg ? props.bg : 'tan'};
`
const Box = styled.button`
    --accent-color : white;
    --font-s20 : 20px;

    width: ${props => props.width ? props.width : '100px'};
    height: 50px;
    margin: 10px;
    color: ${props => props.color ? props.color : 'red'};
    font-size: var(--font-s20);
    ${props => props.primary && css`
        display: block;
        width: 100%;
        border: none;
        border-radius: 30px;
        background: #000;
        color: var(--accent-color);
    `}
`