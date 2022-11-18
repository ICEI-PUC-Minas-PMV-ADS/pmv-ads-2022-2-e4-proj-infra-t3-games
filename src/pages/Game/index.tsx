import { useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';
import { useAuthContext } from '../../contexts/AuthContext';
import { Main } from '../Loja/style';
import { GameImage, Description, GameWrapper, GameName } from './style';

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
    return (
        <div style={{ paddingBottom: '40px' }}>
            <Navbar>
                {isAuthenticated ? (
                    <>
                        <NavbarLink onClick={logout} to={'/login'}>
                            Logout
                        </NavbarLink>
                        <NavbarLink to={'/cadastrogame'}>Cadastrar Game</NavbarLink>
                    </>
                ) : (
                    <>
                        <NavbarLink to={'/login'}>Iniciar Sessão</NavbarLink>
                        <NavbarLink to={'/cadastro'}>Cadastre-se</NavbarLink>
                    </>
                )}
            </Navbar>

            <Main>
                <GameWrapper>
                    <GameName>{game.nome}</GameName>
                    <GameImage src={game.url_fullImagem} />
                    <Description>Gênero: {game.genero}</Description>
                    <Description>{game.descricao}</Description>
                    <Button>Resgatar</Button>
                </GameWrapper>
            </Main>
        </div>
    );
};

export default Game;
