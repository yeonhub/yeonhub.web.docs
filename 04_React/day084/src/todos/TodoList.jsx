import React, { useContext } from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css'
import { TodoContext } from '../contexts/TodosContext';

const TodoList = () => {
    const { data } = useContext(TodoContext)
    return (
        <ul className='TodoList'>
            {
                data.map(item => <TodoItem key={item.id} item={item}/>)
            }

        </ul>
    );
};

export default TodoList;