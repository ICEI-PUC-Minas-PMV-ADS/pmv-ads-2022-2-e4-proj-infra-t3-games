import { CardWrapper, GameDescription, GameImage, GameInfoGroup, GameTitle } from './style';

import gameImage from '../../assets/img/game-image.png';

const CardGamePreco = () => {
    return (
        <CardWrapper>
            <GameImage src={gameImage} />
            <GameInfoGroup>
                <GameTitle>Titulo Game</GameTitle>
                <GameDescription>
                    Economize até 80% em jogos de corrida, incluindo Riders Republic, The Crew 2 e
                    Steep. Termina em 11 de agosto.
                </GameDescription>
            </GameInfoGroup>
        </CardWrapper>
    );
};

export default CardGamePreco;
