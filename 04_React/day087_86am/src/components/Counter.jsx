import { useDispatch, useSelector } from 'react-redux';
import './Counter.css';
import { decrement, increment } from '../store/modules/counterSlice';

const Counter = () => {
	// index reducer 안의 키 값 선택
	const { count } = useSelector(state => state.counter)
	const { color } = useSelector(state => state.counter)
	const dispatch = useDispatch()

	return (
		<div className="Counter">
			<h1 style={{ color: color }}> 숫자: {count}</h1>
			<div className="btn-wrapper">
				<button onClick={()=>dispatch(increment())}>+</button>
				<button onClick={()=>dispatch(decrement())}>-</button>
			</div>
		</div>
	);
};

export default Counter;