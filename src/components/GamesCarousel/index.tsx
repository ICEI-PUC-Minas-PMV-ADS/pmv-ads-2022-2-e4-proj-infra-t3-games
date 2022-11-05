import React from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import CardLancamento from '../CardLancamento';
import { CarouselContainer, StyledSwiperSlide } from './style';

const GamesCarousel = () => {
    return (
        <CarouselContainer>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
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
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <CardLancamento />
                </StyledSwiperSlide>
            </Swiper>
        </CarouselContainer>
    );
};

export default GamesCarousel;
