import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{border:'2px solid #000'}}>
            <Nav />
            
            <Outlet />
            
            <Footer />
        </div>
    );
};

export default Layout;