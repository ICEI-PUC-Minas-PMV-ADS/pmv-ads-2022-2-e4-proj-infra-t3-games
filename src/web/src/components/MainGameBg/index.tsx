import React from 'react';
import { Background } from './style';

interface IMainGameBG {
    image: string;
    height: string;
}

const MainGameBg = ({ image, height }: IMainGameBG) => {
    return <Background image={image} height={height} />;
};

export default MainGameBg;
