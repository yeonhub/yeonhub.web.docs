import React from 'react';
import '../style/header.scss'

const Header = () => {
    return (
        <header>
            <div className="inner">
                <h2>수강과목</h2>
                <p>
                    <button>HOME</button>
                    <button>ADD</button>
                    <button>LOGIN</button>
                </p>
            </div>
        </header>
    );
};

export default Header;