import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardBiblioteca from '../../components/CardBiblioteca';
import { Background } from '../../components/MainGameBg/style';
import Navbar from '../../components/Navbar';
import { Main } from '../Loja/style';
import { BibliotecaWrapper, GamesWrapper } from './style';
import background from '../../assets/img/bckgd.jpg';
import Title from '../../components/Title';
import SectionTitle from '../../components/SectionTitle';
import NavbarLink from '../../components/Navbar/NavbarLink';
import { useAuthContext } from '../../contexts/AuthContext';

interface IUserProps {
    time: Date;
    token: string;
    userName: string;
}

interface IResgates {
    game: {
        nome: string;
        url_imagem: string;
    };
}

const Biblioteca = () => {
    const { logout } = useAuthContext();
    const local = JSON.parse(localStorage.getItem('authenticate') || '');
    const [dados] = useState<IUserProps>(local);
    const [resgates, setResgates] = useState<IResgates[]>([]);

    useEffect(() => {
        axios(
            `https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/resgates/${dados.userName}`,
        ).then((response) => setResgates(response.data));
    }, [dados]);

    return (
        <BibliotecaWrapper>
            <Navbar>
                <NavbarLink to={'/loja'}>Loja</NavbarLink>
                <NavbarLink onClick={logout} to={'/login'}>
                    Logout
                </NavbarLink>
            </Navbar>
            <Background height='100vh' image={background} />
            <Main>
                <Title>Biblioteca</Title>
                <SectionTitle>Seus Jogos</SectionTitle>
                <GamesWrapper>
                    {resgates.map(({ game }) => (
                        <CardBiblioteca src={game.url_imagem}>{game.nome}</CardBiblioteca>
                    ))}
                </GamesWrapper>
            </Main>
            ;
        </BibliotecaWrapper>
    );
};

export default Biblioteca;
