import CardDestaques from '../../components/CardDestaques';
import { ResgateButton } from '../../components/CardLancamento/style';
import FooterBanner from '../../components/FooterBanner';
import GamesCarousel from '../../components/GamesCarousel';
import MainGameBg from '../../components/MainGameBg';
import Navbar from '../../components/Navbar';
import {
    LancamentosGroup,
    LancamentosSeparator,
    LancamentosText,
    LancamentosTitle,
    Main,
    MainGameDescription,
    MainGameGroup,
    DestaquesGroup,
} from './style';

import destaque1 from '../../assets/img/destaque-1.png';
import destaque2 from '../../assets/img/destaque-2.png';
import destaque3 from '../../assets/img/destaque-3.png';

const items = [
    { name: 'Iniciar Sessão', link: '/login' },
    { name: 'Cadastre-se', link: '/' },
];

const Loja = () => {
    return (
        <div>
            <MainGameBg />
            <Navbar items={items} />
            <Main>
                <MainGameGroup>
                    <MainGameDescription>
                        Call of Duty é uma franquia de videogame de tiro em primeira pessoa
                        publicada pela Activision. Começando em 2003, primeiro se concentrou em
                        jogos ambientados na Segunda Guerra Mundial. Com o tempo, a série viu jogos
                        ambientados no meio da Guerra Fria, mundos futuristas e espaço sideral.
                    </MainGameDescription>
                    <ResgateButton>Resgate já</ResgateButton>
                </MainGameGroup>
                <LancamentosGroup>
                    <LancamentosTitle>
                        <LancamentosText>Novos</LancamentosText>
                        <LancamentosSeparator></LancamentosSeparator>
                        <LancamentosText>Lançamentos</LancamentosText>
                    </LancamentosTitle>
                    <GamesCarousel />
                </LancamentosGroup>
                <DestaquesGroup>
                    <CardDestaques
                        src={destaque1}
                        title='Liquidação de Corrida da Ubisoft'
                        text='Economize até 80% em jogos de corrida, incluindo Riders Republic, The Crew 2 e Steep. Termina em 11 de agosto.'
                    />
                    <CardDestaques
                        src={destaque2}
                        title='Rocket League'
                        text='Pegue as trilhas com o Pacote Ford Bronco Raptor RLE!'
                    />
                    <CardDestaques
                        src={destaque3}
                        title='Genshin Impact - Versão 2.8'
                        text='Esta atualização chega com grandes aventuras, trajes elegantes e histórias intrigantes sobre Shikanoin Heizou e amigos!'
                    />
                </DestaquesGroup>
            </Main>
            <FooterBanner />
        </div>
    );
};

export default Loja;
