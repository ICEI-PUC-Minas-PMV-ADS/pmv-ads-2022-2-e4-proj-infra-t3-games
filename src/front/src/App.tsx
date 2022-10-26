import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from '@emotion/react';
import { DarkTheme } from './themes';

export const App = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </ThemeProvider>
    );
};
