import React, { ReactNode } from 'react';
import { CardImage, CardWrapper, CardTitle } from './style';

interface ICardBiblioteca {
    src: string;
    children: ReactNode;
}

const CardBiblioteca = ({ src, children }: ICardBiblioteca) => {
    return (
        <CardWrapper>
            <CardImage src={src} />
            <CardTitle>{children}</CardTitle>
        </CardWrapper>
    );
};

export default CardBiblioteca;
