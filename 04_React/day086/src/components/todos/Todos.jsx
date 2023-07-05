import React from 'react';
import TodosInput from './TodosInput';
import TodosList from './TodosList';
import { useSelector } from 'react-redux';

const Todos = () => {
    const { color } = useSelector(state => state.color)
    return (
        <div>
            <h1 style={{ color: color }}>과목관리</h1>
            <TodosInput />
            <TodosList />
        </div>
    );
};

export default Todos;