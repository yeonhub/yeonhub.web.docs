import { useDispatch } from "react-redux"
import { onColor } from "../store/modules/colorListSlice";

const ColorSquareItem = ({ item }) => {
	const { id, color, opacity } = item
	const dispatch = useDispatch()

	return (
		<div className="Color" style={{ background: color }} onClick={() => dispatch(onColor(color))}>
		</div>
	);
};

export default ColorSquareItem;