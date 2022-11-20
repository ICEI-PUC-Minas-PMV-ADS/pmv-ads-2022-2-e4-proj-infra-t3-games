import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface IAuthContextData {
  logout: () => void;
  isAuthenticated: boolean;
  user: string;
}
interface autheticate {
  userName: string;
  token: string;
  time: number
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
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.clear();
    setauthenticate(undefined);
  }, []);

  const isAuthenticated = useMemo(() => {
    if(authenticate?.time) {
      const now = new Date().getTime()
      if(new Date(now - authenticate.time).getMinutes() < 15) {return true} else {return false}
    } else 
    return false    
  }, [authenticate]);

  const user = !!authenticate? authenticate.userName : '';

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout: handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);