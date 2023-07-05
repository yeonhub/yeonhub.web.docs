import React from 'react';
import TodosItem from './TodosItem';
import { useSelector } from 'react-redux';

const TodosList = () => {
    const { data } = useSelector(state => state.todosR)
    return (
        <div>
            {
                data.map(item => <TodosItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default TodosList;