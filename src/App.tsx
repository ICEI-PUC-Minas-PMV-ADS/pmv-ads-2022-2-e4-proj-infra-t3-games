import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ValidarCode from './pages/ValidarCode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/code' element={<ValidarCode />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
