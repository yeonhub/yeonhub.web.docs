import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeInput } from '../../store/modules/todosSlice';

const TodosInput = () => {
    const { text } = useSelector(state => state.todosR)
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        dispatch(addTodo(text))
        dispatch(changeInput(''))
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e) => dispatch(changeInput(e.target.value))} value={text} placeholder='과목'/>
        </form>
    );
};

export default TodosInput;