import {useEffect, useState} from 'react';
import {
    Image,
    FlatList,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import logoImg from '../../assets/logowhite.png';
import {Background} from '../../components/Background';

import {Heading} from '../../components/Heading';

import {styles} from './styles';

import axios from 'axios';
import {BibliotecaParams} from '../../@types/navigation';
import {GameIcon} from '../../components/GameIcon';

interface GamesResgatados {
    game: {
        genero: string;
        id: string;
        nome: string;
        quantidade: string;
        url_fullImagem: string;
        url_imagem: string;
        descricao: string;
    };
}

export function Biblioteca() {
    const [games, setGames] = useState<GamesResgatados[]>([]);

    const route = useRoute();
    const userData = route.params as BibliotecaParams;

    useEffect(() => {
        axios(
            `https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/resgates/${userData.userEmail}`,
        ).then((response) => setGames(response.data));
    }, [userData]);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Image source={logoImg} style={styles.logo} />
                    <Heading
                        title='Biblioteca'
                        subtitle='Jogos que você adquiriu'
                    />
                    <View style={styles.gamesContainer}>
                        {games.map(({game}) => (
                            <GameIcon key={game.id} data={game}></GameIcon>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
