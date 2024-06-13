import React, { useState } from 'react'
import UserContext from '../context/UserContext'
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <div>
            <UserContext.Provider value={{ UserContext, login, logout }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserProvider