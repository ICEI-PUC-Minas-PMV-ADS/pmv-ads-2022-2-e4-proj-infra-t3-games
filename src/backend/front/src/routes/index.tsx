import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { ConfirmCode, Home, RegisterUser, Signin } from '../pages';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/homepage' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/register' element={<RegisterUser />} />
                <Route path='/confirm-code' element={<ConfirmCode />} />
                <Route path='*' element={<Navigate to='/homepage' />} />
            </Routes>
        </BrowserRouter>
    );
};
