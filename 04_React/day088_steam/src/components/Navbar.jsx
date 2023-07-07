import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector(state => state.cart)
    return (
        <nav className="nav">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart'>Cart / {cart.length}</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;