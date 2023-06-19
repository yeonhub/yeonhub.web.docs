import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Test8 = () => {
    return (
        <Container>
            <p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </p>
            <TodoList>
                <TodoItem>title 1 : desc 1</TodoItem>
            </TodoList>
        </Container>
    );
};

export default Test8;