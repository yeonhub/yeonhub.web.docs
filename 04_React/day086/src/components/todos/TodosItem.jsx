import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delTodo, toggleTodo } from '../../store/modules/todosSlice';

const TodosItem = ({ item }) => {
    const { id, text, isChk } = item
    const dispatch = useDispatch()
    return (
        <li style={{ color: isChk ? 'lightgray' : 'black' , margin : 10}}>
            <input type='checkbox' checked={isChk} onChange={() => dispatch(toggleTodo(id))} />
            {text}
            <button style={{marginLeft : 10}} onClick={() => dispatch(delTodo(id))}>삭제</button>
        </li>
    );
};

export default TodosItem;