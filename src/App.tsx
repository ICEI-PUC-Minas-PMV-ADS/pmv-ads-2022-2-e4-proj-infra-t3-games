import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ValidarCode from './pages/ValidarCode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loja from './pages/Loja';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Cadastro />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/code' element={<ValidarCode />} />
                    <Route path='/loja' element={<Loja />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
