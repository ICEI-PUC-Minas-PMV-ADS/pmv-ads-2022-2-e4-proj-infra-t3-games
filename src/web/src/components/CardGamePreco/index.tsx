import {
    CardWrapper,
    GameDescription,
    GameImage,
    GameInfoGroup,
    GameTitle,
} from './style';

import gameImage from '../../assets/img/game-image.png';

interface ICardGamePreco {
    image: string;
    title: string;
    description: string;
}

const CardGamePreco = ({image, title, description}: ICardGamePreco) => {
    return (
        <CardWrapper>
            <GameImage src={image} />
            <GameInfoGroup>
                <GameTitle>{title}</GameTitle>
                <GameDescription>{description}</GameDescription>
            </GameInfoGroup>
        </CardWrapper>
    );
};

export default CardGamePreco;
