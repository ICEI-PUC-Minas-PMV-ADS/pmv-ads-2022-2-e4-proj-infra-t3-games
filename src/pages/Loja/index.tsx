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
} from './style';

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
            </Main>
            <FooterBanner />
        </div>
    );
};

export default Loja;
