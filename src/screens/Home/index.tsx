import {useEffect, useState} from 'react';
import {Image, FlatList, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logowhite.png';
import {Background} from '../../components/Background';
import {GameCard, GameCardProps} from '../../components/GameCard';
import {Heading} from '../../components/Heading';

import {styles} from './styles';
import {CreateAdBanner} from '../../components/CreateAdBanner';
import {CreateAdModal} from '../../components/CreateAdModal';

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);
    const [openCreateAdModal, setOpenCreateAdModal] = useState<boolean>(false);

    const navigation = useNavigation();

    const handleOpenGame = ({
        id,
        nome,
        descricao,
        url_fullImagem,
        genero,
    }: GameCardProps) => {
        navigation.navigate('game', {
            id,
            descricao,
            nome,
            url_fullImagem,
            genero,
        });
    };

    useEffect(() => {
        fetch(
            'https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/games',
        )
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Image source={logoImg} style={styles.logo} />
                    <Heading
                        title='Resgate agora!'
                        subtitle='Selecione o game que deseja resgatar...'
                    />
                    <FlatList
                        style={styles.gamesContainer}
                        data={games}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <GameCard
                                data={item}
                                onPress={() => handleOpenGame(item)}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentList}
                    />
                    <CreateAdBanner
                        togglePress={() => setOpenCreateAdModal(true)}
                    />
                    <CreateAdModal
                        visible={openCreateAdModal}
                        onClose={() => setOpenCreateAdModal(false)}
                    />
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
