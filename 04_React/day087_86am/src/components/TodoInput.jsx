import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeInput } from "../store/modules/todoSlice";

const TodoInput = () => {
    const dispatch = useDispatch()
    const { text } = useSelector(state => state.todo)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        dispatch(addTodo(text))
        dispatch(changeInput(''))
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="이름을 입력하세요" value={text} onChange={(e) => dispatch(changeInput(e.target.value))} />
        </form>
    );
};

export default TodoInput;