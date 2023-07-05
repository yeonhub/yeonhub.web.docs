import './Counter.css';
import { useDispatch, useSelector } from 'react-redux'
import { plus, minus } from '../store/modules/counterSlice'

const Counter = () => {
  const { counter } = useSelector(state => state.counterR)
  const { color } = useSelector(state => state.colorR)

  const dispatch = useDispatch()

  return (
    <div className="Counter">
      <h1 style={{ color: color }}> 숫자: {counter}</h1>
      <div className="btn-wrapper">
        <button onClick={() => dispatch(plus())}>+</button>
        <button onClick={() => dispatch(minus())}>-</button>
      </div>
    </div>
  );
};

export default Counter;
