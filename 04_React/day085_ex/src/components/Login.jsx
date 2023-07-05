import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, authed } = useAuth()

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
    }
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label>이메일</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </p>
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
};

export default Login;