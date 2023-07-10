import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav className="nav">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/notice'>Notice</Link></li>
                <li><Link to='/customer'>QnA</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;