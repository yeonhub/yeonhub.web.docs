import { useDispatch } from "react-redux";
import { removeColor, setOpacity } from "../store/modules/colorListSlice";

const ColorListItem = ({ item }) => {
    const { id, color, opacity } = item
    const dispatch = useDispatch()
    return (
        <li style={{ backgroundColor: color, opacity: opacity }} onContextMenu={(e) => { e.preventDefault(), dispatch(removeColor(id)) }
        } onClick={() => dispatch(setOpacity(id))}>
            {color}
        </li >
    );
};

export default ColorListItem;