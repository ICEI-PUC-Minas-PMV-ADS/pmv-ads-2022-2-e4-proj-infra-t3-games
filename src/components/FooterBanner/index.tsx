import { FooterButton, FooterImage, FooterInfo, FooterText, FooterGroup } from './style';
import gameLibrary from '../../assets/img/game-library.png';
import { ArrowRight } from 'phosphor-react';
const FooterBanner = () => {
    return (
        <FooterGroup>
            <FooterInfo>
                <FooterText>
                    Pesquise por gênero, características, preço e muito mais para encontrar seu
                    próximo jogo favorito.
                </FooterText>
                <FooterButton>
                    Saiba mais
                    <ArrowRight size={24} weight='fill' />
                </FooterButton>
            </FooterInfo>
            <FooterImage src={gameLibrary} />
        </FooterGroup>
    );
};

export default FooterBanner;
