import React from 'react';
import { CardImage, CardInfo, CardText, CardTitle, CardWrapper } from './style';

interface Props {
    src: string;
    title: string;
    text: string;
}

const CardDestaques = ({ src, title, text }: Props) => {
    return (
        <CardWrapper>
            <CardImage src={src} />
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
            </CardInfo>
        </CardWrapper>
    );
};

export default CardDestaques;
