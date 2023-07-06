import { useDispatch } from "react-redux";
import { delTodo, toggleTodo } from "../store/modules/todoSlice";


const TodoItem = ({ item }) => {
    const { id, text, isChk } = item
    const dispatch = useDispatch()

    return (
        <li  >
            <input type="checkbox" checked={isChk} onChange={() => dispatch(toggleTodo(id))} />
            <span className={isChk ? 'on' : ''}>
                대기번호 : {id} &nbsp;&nbsp;&nbsp;   {text} </span>
            <button>수정</button>
            <button onClick={() => dispatch(delTodo(id))}> 삭제</button>
        </li>
    );
};

export default TodoItem;