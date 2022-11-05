import React from 'react';
import Footer from '../../components/Footer';
import FooterBanner from '../../components/FooterBanner';
import GamesCarousel from '../../components/GamesCarousel';
import Grid from '../../components/Grid';
import MainGameBg from '../../components/MainGameBg';
import Navbar from '../../components/Navbar';

const items = [
    { name: 'Iniciar Sessão', link: '/login' },
    { name: 'Cadastre-se', link: '/' },
];

const Loja = () => {
    return (
        <Grid>
            <MainGameBg />
            <Navbar items={items} />
            <GamesCarousel />
            <FooterBanner />
        </Grid>
    );
};

export default Loja;
