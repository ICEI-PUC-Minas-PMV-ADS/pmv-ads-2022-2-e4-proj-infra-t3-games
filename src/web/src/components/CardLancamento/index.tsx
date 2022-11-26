import { GameImage, GameTitle, StyledDiv } from './style';

interface ICardLancamento {
    nome: string;
    url_imagem: string;
    id: string;
}

const CardLancamento = ({ nome, url_imagem }: ICardLancamento) => {
    return (
        <StyledDiv>
            <GameImage src={url_imagem} />
            <GameTitle>{nome}</GameTitle>
        </StyledDiv>
    );
};

export default CardLancamento;
