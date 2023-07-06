import { useDispatch } from "react-redux";
import { changeColor } from "../store/modules/counterSlice";

const ColorSquareItem = ({ item }) => {
	const bgColor = item
	const dispatch = useDispatch()
	return (
		<li className="Color" style={{ background: bgColor }} onClick={() => dispatch(changeColor(bgColor))}>
			{bgColor}
		</li>
	);
};

export default ColorSquareItem;