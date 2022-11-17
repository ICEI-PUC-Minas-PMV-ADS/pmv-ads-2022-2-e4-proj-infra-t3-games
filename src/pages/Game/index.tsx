import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useAuthContext } from '../../contexts/AuthContext';
import { Main } from '../Loja/style';
import { GameImage, Description, GameWrapper } from './style';

interface IGame {
    id: string;
    nome: string;
    descricao: string;
    url_imagem: string;
    url_fullImagem: string;
    genero: string;
}

const Game = () => {
    const game = useLocation().state as IGame;
    const { isAuthenticated, logout } = useAuthContext();
    const items = [
        { name: 'Iniciar Sessão', link: '/login' },
        { name: 'Cadastre-se', link: '/cadastro' },
    ];
    const items2 = [
        {
            name: 'Logout',
            link: '/login',
            onClick() {
                logout();
            },
        },
        { name: 'Cadastrar Game', link: '/cadastrogame' },
    ];
    return (
        <div style={{ paddingBottom: '40px' }}>
            {isAuthenticated ? <Navbar items={items2} /> : <Navbar items={items} />}
            <Main>
                <GameWrapper>
                    <GameImage src={game.url_fullImagem} />
                    <Description>{game.descricao}</Description>
                </GameWrapper>
            </Main>
        </div>
    );
};

export default Game;
