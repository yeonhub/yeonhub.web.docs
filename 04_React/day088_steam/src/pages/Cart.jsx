import { useSelector } from 'react-redux';
import './Cart.css'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useSelector(state => state.cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className="inner">
            <div className="cart-wrap">
                <div className="cart-list">
                    {
                        cart.map(item => <CartItem key={item.id} item={item} />)
                    }

                </div>
                {
                    cart.length === 0 ? <div className='cart-empty'><h2>장바구니 비어있음</h2><Link to='/'>쇼핑하러 가기</Link></div>
                        :
                        <div className='total'>
                            <span>총 개수 : {cart.length}</span>
                            <span>총 금액 : {totalPrice.toLocaleString('kr-KR')}</span>
                            <span></span>
                        </div>
                }
            </div>

        </div>
    );
};

export default Cart;