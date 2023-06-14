import React from 'react';
import './Todos.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div className='Todos'>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default Todos;