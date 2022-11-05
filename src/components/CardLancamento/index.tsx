import { GameImage, GameTitle, ResgateButton, StyledDiv } from './style';
import gameImage from '../../assets/img/game-image.png';

const CardLancamento = () => {
    return (
        <StyledDiv>
            <GameImage src={gameImage} />
            <GameTitle>title</GameTitle>
            <ResgateButton>Resgatar</ResgateButton>
        </StyledDiv>
    );
};

export default CardLancamento;
