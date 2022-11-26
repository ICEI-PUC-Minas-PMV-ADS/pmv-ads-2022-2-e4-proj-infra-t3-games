import React, {useEffect, useState} from 'react';
import {
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logowhite.png';
import {Background} from '../../components/Background';
import {GameCard, GameCardProps} from '../../components/GameCard';
import {Heading} from '../../components/Heading';

import {styles} from './styles';
import {Auth} from 'aws-amplify';
import {BibliotecaBanner} from '../../components/BibliotecaBanner';

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState('');

    const navigation = useNavigation();

    const handleLogout = async () => {
        Auth.signOut();
    };

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
            token,
            userEmail,
        });
    };

    useEffect(() => {
        fetch(
            'https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/games',
        )
            .then((response) => response.json())
            .then((data) => setGames(data));
    }, []);

    useEffect(() => {
        Auth.currentSession().then((response) => {
            let accessToken = response.getAccessToken();
            let jwt = accessToken.getJwtToken();
            let idToken = response.getIdToken();
            let email = idToken.payload.email;
            setToken(jwt);
            setUserEmail(email);
        });
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleLogout();
                        }}
                    >
                        <Text style={styles.buttonTitle}>Logout</Text>
                    </TouchableOpacity>
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
                    <BibliotecaBanner
                        togglePress={() =>
                            navigation.navigate('biblioteca', {
                                userEmail,
                                token,
                            })
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
