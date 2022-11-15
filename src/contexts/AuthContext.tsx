import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface IAuthContextData {
  logout: () => void;
  isAuthenticated: boolean;
  user: string;
}
interface autheticate {
  userName: string;
  token: string;
}

const AuthContext = createContext({} as IAuthContextData);
const LOCAL_STORAGE_KEY = 'authenticate';

interface IAuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [authenticate, setauthenticate] = useState<autheticate>();

  useEffect(() => {
    const authenticate = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (authenticate) {
      setauthenticate(JSON.parse(authenticate));
    } else {
      setauthenticate(undefined);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setauthenticate(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!authenticate, [authenticate]);
  const user = !!authenticate? authenticate.userName : '';

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout: handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);