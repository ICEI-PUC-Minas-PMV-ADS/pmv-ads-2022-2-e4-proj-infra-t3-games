import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';

export const App = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};
