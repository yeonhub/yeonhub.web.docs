import React, { useState } from 'react';
import { Link } from "react-router-dom";
import menuData from "./data"

const NavBar = () => {
    const [isNav, setIsNav] = useState(false)
    const onToggle = () => {
        setIsNav(!isNav)
    }
    return (
        <div className='navbar'>
            <p className='all-menu'>
                <i className='xi-bars' onClick={onToggle}></i>
            </p>
            <nav className={isNav ? 'on' : ''}>
                <p>
                    <i className='xi-angle-left' onClick={() => setIsNav(false)}></i>
                </p>
                <ul>
                    {
                        menuData.map((item, idx) => <li key={idx}><Link to={item.path}>{item.title}</Link></li>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;