import CardDestaques from '../../components/CardDestaques';
import {ResgateButton} from '../../components/GamesCarousel/style';
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
    CardGameGroup,
    CardGameGrid,
} from './style';

import destaque1 from '../../assets/img/destaque-1.png';
import destaque2 from '../../assets/img/destaque-2.png';
import destaque3 from '../../assets/img/destaque-3.png';
import cod from '../../assets/img/cod.jpg';
import CardGamePreco from '../../components/CardGamePreco';
import SectionTitle from '../../components/SectionTitle';
import {useAuthContext} from '../../contexts/AuthContext';
import NavbarLink from '../../components/Navbar/NavbarLink';

const Loja = () => {
    const {isAuthenticated, logout} = useAuthContext();

    return (
        <div style={{paddingBottom: '40px'}}>
            <MainGameBg height='1160px' image={cod} />
            <Navbar>
                {isAuthenticated ? (
                    <>
                        {/* <NavbarLink to={'/cadastrogame'}>
                            Cadastrar Game
                        </NavbarLink> */}
                        <NavbarLink to={'/biblioteca'}>Biblioteca</NavbarLink>
                        <NavbarLink onClick={logout} to={'/login'}>
                            Logout
                        </NavbarLink>
                    </>
                ) : (
                    <>
                        <NavbarLink to={'/login'}>Iniciar Sessão</NavbarLink>
                        <NavbarLink to={'/cadastro'}>Cadastre-se</NavbarLink>
                    </>
                )}
            </Navbar>
            <Main>
                <MainGameGroup>
                    <MainGameDescription>
                        Call of Duty é uma franquia de videogame de tiro em
                        primeira pessoa publicada pela Activision. Começando em
                        2003, primeiro se concentrou em jogos ambientados na
                        Segunda Guerra Mundial. Com o tempo, a série viu jogos
                        ambientados no meio da Guerra Fria, mundos futuristas e
                        espaço sideral.
                    </MainGameDescription>
                    <ResgateButton>Resgate já</ResgateButton>
                </MainGameGroup>
                <LancamentosGroup>
                    <LancamentosTitle>
                        <LancamentosText>Resgate</LancamentosText>
                        <LancamentosSeparator></LancamentosSeparator>
                        <LancamentosText>agora</LancamentosText>
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
                <CardGameGroup>
                    <SectionTitle>Navegue pelos games</SectionTitle>
                    <CardGameGrid>
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg'
                            }
                            title={'Hearthstone'}
                            description={
                                'Aparentemente simples e incrivelmente divertido, Hearthstone é um jogo de cards estratégico e dinâmico criado pela Blizzard Entertainment.'
                            }
                        />
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/459676_IGDB-285x380.jpg'
                            }
                            title={'Batman: Arkham Knight'}
                            description={
                                'Em Batman: Arkham Knight, o explosivo último capítulo da série Arkham, Batman enfrenta a maior ameaça já vista pela cidade que ele jurou proteger.'
                            }
                        />
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg'
                            }
                            title={'Overwatch 2'}
                            description={
                                'Overwatch 2 é um jogo de ação em equipe grátis para jogar que se passa em um futuro otimista, no qual cada partida é um campo de batalha 5v5 definitivo.'
                            }
                        />
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg'
                            }
                            title={'Minecraft'}
                            description={
                                'Explore mundos infinitos e construa desde simples casas a grandiosos castelos. Jogue no modo criativo com recursos ilimitados ou minere fundo no mundo no modo sobrevivência.'
                            }
                        />
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB-285x380.jpg'
                            }
                            title={'Escape from Tarkov'}
                            description={
                                'A cada dia que passa, a situação da região de Norvinsk fica mais complicada. Confrontos incessantes em Tarkov geraram pânico massivo.'
                            }
                        />
                        <CardGamePreco
                            image={
                                'https://static-cdn.jtvnw.net/ttv-boxart/75467_IGDB-285x380.jpg'
                            }
                            title={'Euro Truck Simulator 2'}
                            description={
                                'Dirija vários caminhões através de um mapa que representa a Europa e suas estradas, pegando cargas de vários locais e realizando entregas.'
                            }
                        />
                    </CardGameGrid>
                </CardGameGroup>
            </Main>
            <FooterBanner />
        </div>
    );
};

export default Loja;
