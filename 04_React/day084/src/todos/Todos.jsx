import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todos.css'

const Todos = () => {
    return (
        <div className='Todos'>
            <h1>일정 관리하기</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;