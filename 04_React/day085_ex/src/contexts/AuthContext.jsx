import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContetxt = createContext()
export const useAuth = () => useContext(AuthContetxt)

const AuthProvider = ({ children }) => {
    const navigete = useNavigate()

    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('user')) || null
    )
    const login = (email, password) => {
        const logUser = {
            id: 'ez',
            email, password
        }
        localStorage.setItem('user', JSON.stringify(logUser))
        if (password === '1234') {
            setUser(logUser)
            navigete('/')
        }
    }
    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    const value = useMemo(() => ({
        user, login, logout, authed: !!user
    }), [user, login, logout])

    return (
        <AuthContetxt.Provider value={value}>
            {children}
        </AuthContetxt.Provider>
    );
};

export default AuthProvider;