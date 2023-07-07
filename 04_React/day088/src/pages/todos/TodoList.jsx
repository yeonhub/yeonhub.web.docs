import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { getTodos } from '../../store/modules/todoSlice';

const TodoList = () => {
    const { todos } = useSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTodos())
    },[])

    return (
        <div>
            {
                todos.map(item => <TodoItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default TodoList;