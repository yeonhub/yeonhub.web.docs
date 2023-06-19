import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${props => props.width};
    border: 3px solid #000;
    padding: 15px;
    margin: 15px auto;
    text-align: center;
    h2 {
        font-size:40px;
        color:green;
        margin-bottom: 20px;
    }
`;
const Button = styled.button`
    width: 120px;
    height: 50px;
`;

const Test6 = () => {
    return (
        <Container width="300px" color="green">
            <h2>카운트 : xxx</h2>
            <p>
                <Button>감소</Button>
                <Button>증가</Button>
            </p>
        </Container>
    );
};

export default Test6;