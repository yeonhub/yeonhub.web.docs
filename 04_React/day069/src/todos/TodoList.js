import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';


const TodoList = () => {
    return (
        <div>
            <ul className='TodoList'>
                <TodoItem/>
            </ul>
        </div>
    );
};

export default TodoList;