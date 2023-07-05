import { useSelector } from 'react-redux';
import './ColorSquare.css';
import ColorSquareItem from './ColorSquareItem';


const ColorSquare = () => {
	const { colorData } = useSelector(state => state.colorR)

	return (
		<div className="ColorSquare">
			{
				colorData.map(item => <ColorSquareItem key={item.id} item={item} />)
			}
		</div>
	);
};

export default ColorSquare;

