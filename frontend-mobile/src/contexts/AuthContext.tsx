import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    isMember: boolean;
    login: () => void;
    logout: () => void;
    joinEvent: () => void;
    leaveEvent: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMember, setIsMember] = useState(false);

    const login = () => { setIsLoggedIn(true); };
    const logout = () => {
        setIsLoggedIn(false);
        setIsMember(false);
    };
    const joinEvent = () => { setIsMember(true); };
    const leaveEvent = () => { setIsMember(false); };

    return (
        <AuthContext.Provider value={{ isLoggedIn, isMember, login, logout, joinEvent, leaveEvent }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth ne fonctionne que dans un AuthProvider');
    }

    return context;
};
