import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                spaceBetween={28}
                slidesPerView={6}
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
