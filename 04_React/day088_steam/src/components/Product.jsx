import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from '../store/modules/cartSlice';

const Product = ({ item }) => {
    const { id, title, price, description, category, image, rating } = item
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <article>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <h4> {description} </h4>
            <p>
                {
                    cart.find(item => item.id === id) ?
                        <button onClick={() => dispatch(removeCart(id))} className='off'>취소하기</button>
                        :
                        <button onClick={() => dispatch(addCart(item))}>주문하기</button>
                }
                <span>{
                    price === 0 ? '무료' : `${price.toLocaleString("kr-KR")} 원`
                }</span>
            </p>
        </article>
    );
};

export default Product;