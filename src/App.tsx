import React from 'react';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login'
import ValidarCode from './pages/ValidarCode';
import Container from './templates/Container';

function App() {
    return (
        <div className='App'>
             {/* <Cadastro />  */}
             <Login/> 
            {/* <ValidarCode /> */}
        </div>
    );
}

export default App;
