import React, { useContext } from 'react';
import './TodoForm.css'
import { TodoContext } from '../contexts/TodosContext';

const TodoForm = () => {
    const { onSubmit, changeInput, text } = useContext(TodoContext)
    return (
        <form className='TodoForm' onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput} />
        </form>
    );
};

export default TodoForm;