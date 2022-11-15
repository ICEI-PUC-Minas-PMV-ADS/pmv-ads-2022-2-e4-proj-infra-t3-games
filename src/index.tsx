import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeProvider>
    </>,
);
