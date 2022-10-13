import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export const Home = () => {
    const { isAuthenticated, logout } = useAuthContext();

    const handleLogout = useCallback(() => {
        logout();
        window.location.reload();
    }, [logout]);

    return (
        <div>
            <h1> Home Page </h1>
            {isAuthenticated ? (
                <button onClick={handleLogout}> logout </button>
            ) : (
                <Link to='/signin'> signin </Link>
            )}
            <div></div>
        </div>
    );
};
