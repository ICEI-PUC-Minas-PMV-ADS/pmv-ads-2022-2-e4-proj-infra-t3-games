import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ValidarCode from './pages/ValidarCode';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loja from './pages/Loja';
import CadastroGame from './pages/CadastroGame';
import Game from './pages/Game';
import Biblioteca from './pages/Biblioteca';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='*' element={<Navigate to='/loja' />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/code' element={<ValidarCode />} />
                    <Route path='/loja' element={<Loja />} />
                    <Route path='/loja/game/:id' element={<Game />} />
                    <Route path='/biblioteca' element={<Biblioteca />} />
                    <Route path='/cadastrogame' element={<CadastroGame />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
