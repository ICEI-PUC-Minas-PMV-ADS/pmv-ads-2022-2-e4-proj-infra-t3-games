import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const CarouselContainer = styled.div`
    max-width: 1064px;
    margin: 0 auto;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    margin-top: 26px;
`;

export const ResgateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 32px;
    padding: 14px 24px;
    font-size: 18px;
    background: linear-gradient(
        90deg,
        #bd0059 8.77%,
        rgba(255, 13, 211, 0.542483) 50.51%,
        rgba(123, 0, 179, 0) 100%
    );
    border-radius: 4px;
    color: white;
    mix-blend-mode: normal;
    border: none;
    cursor: pointer;

    :hover {
        filter: brightness(0.9);
    }

    :active {
        transform: scale(0.98);
    }
`;
