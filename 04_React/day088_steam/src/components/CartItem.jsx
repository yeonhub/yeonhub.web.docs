import { useDispatch } from "react-redux";
import { removeCart } from "../store/modules/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, description, category, image, rating } = item
  const dispatch = useDispatch()

  return (
    <article>
      <img src={image} alt={title} />
      <div>
        <h3> {title} </h3>
        <span>{
          price === 0 ? '무료' : `${price.toLocaleString("kr-KR")} 원`
        }</span>
      </div>
      <button onClick={() => dispatch(removeCart(id))}> 삭제 </button>
    </article>
  );
};

export default CartItem;