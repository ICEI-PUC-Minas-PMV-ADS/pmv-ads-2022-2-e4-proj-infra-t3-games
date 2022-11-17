import React from 'react';
import { Background } from './style';

interface IMainGameBG {
    image: string;
}

const MainGameBg = ({ image }: IMainGameBG) => {
    return <Background image={image} />;
};

export default MainGameBg;
