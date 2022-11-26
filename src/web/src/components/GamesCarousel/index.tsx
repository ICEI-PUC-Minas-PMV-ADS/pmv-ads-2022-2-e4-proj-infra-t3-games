import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import CardLancamento from '../CardLancamento';
import { CarouselContainer, StyledSwiperSlide, ResgateButton } from './style';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export interface IGame {
    id: string;
    nome: string;
    descricao: string;
    url_imagem: string;
    url_fullImagem: string;
    genero: string;
    quantidade: number;
}

const GamesCarousel = () => {
    const [games, setGames] = useState<IGame[]>([]);
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
        axios('https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/games').then((response) =>
            setGames(response.data),
        );
    }, []);

    const navigate = useNavigate();

    const handleOpenGame = ({ id, url_imagem, nome, url_fullImagem, descricao, genero }: IGame) => {
        if(!isAuthenticated) {navigate('/login')} 
        else {
            navigate(`/loja/game/${id}`, {
                state: { id, url_imagem, nome, url_fullImagem, descricao, genero },
            });
        }
    };

    return (
        <CarouselContainer>
            <Swiper
                modules={[Pagination]}
                grabCursor={true}
                breakpoints={{
                    1: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    550: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    710: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    890: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1064: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {games.map((game) => (
                    <StyledSwiperSlide key={game.id}>
                        <CardLancamento
                            nome={game.nome}
                            url_imagem={game.url_imagem}
                            id={game.id}
                        />
                        <ResgateButton onClick={() => handleOpenGame(game)}>Resgatar</ResgateButton>
                    </StyledSwiperSlide>
                ))}
            </Swiper>
        </CarouselContainer>
    );
};

export default GamesCarousel;
