// import {createContext} from 'react';

// interface IAuthContextData{

// }

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
    user: string;
}
interface autheticate {
    userName: string;
    token: string;
    time: number;
}

const AuthContext = createContext({} as IAuthContextData);
const LOCAL_STORAGE_KEY = 'authenticate';

interface IAuthProviderProps {
    children: React.ReactNode;
}
export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [authenticate, setauthenticate] = useState<autheticate>();

    useEffect(() => {
        async () => {
            try {
                const saveToken = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
                const state = saveToken ? JSON.parse(saveToken) : undefined;
                setauthenticate(state);
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    console.log(authenticate);

    const handleLogout = useCallback(() => {
        AsyncStorage.clear();
        setauthenticate(undefined);
    }, []);

    const isAuthenticated = useMemo(() => {
        if (authenticate?.time) {
            const now = new Date().getTime();
            if (new Date(now - authenticate.time).getMinutes() < 15) {
                return true;
            } else {
                return false;
            }
        } else return false;
    }, [authenticate]);

    const user = !!authenticate ? authenticate.userName : '';

    return (
        <AuthContext.Provider
            value={{isAuthenticated, logout: handleLogout, user}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
