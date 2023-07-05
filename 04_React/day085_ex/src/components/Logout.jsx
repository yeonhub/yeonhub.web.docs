import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
    const { logout } = useAuth()
    useEffect(() => {
        logout()
    }, [])
    return (
        <div>
            <h2>로그아웃 되었습니다.</h2>
        </div>
    );
};

export default Logout;