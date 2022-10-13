import { createContext, useCallback, useContext, useMemo } from 'react';
import { TokenName } from '../../ENV';

interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
}
const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
    children: React.ReactNode;
}
export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const handleLogout = useCallback(() => {
        localStorage.removeItem(TokenName);
    }, []);

    const isAuthenticated = useMemo(() => !!localStorage.getItem(TokenName), []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
