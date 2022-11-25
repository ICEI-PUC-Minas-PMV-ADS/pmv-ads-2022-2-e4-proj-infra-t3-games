import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Background} from '../../components/Background';
import {styles} from './styles';
import {GameParams} from '../../@types/navigation';
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    ScrollView,
    Alert,
} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {THEME} from '../../theme';
import logoImg from '../../assets/logowhite.png';
import {Heading} from '../../components/Heading';
import React from 'react';
import axios from 'axios';

export function Game() {
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleResgate = async () => {
        try {
            await axios.post(
                'https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/resgates',
                {
                    user_email: game.userEmail,
                    game_id: game.id,
                },
                {
                    headers: {
                        Authorization: game.token,
                    },
                },
            );
            Alert.alert('Sucesso!', 'Seu jogo foi resgatado.');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={25}
                        />
                    </TouchableOpacity>
                    <View style={styles.right} />
                </View>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.coverContainer}>
                        <Image
                            source={{uri: game.url_fullImagem}}
                            style={styles.cover}
                            resizeMode='cover'
                        />
                    </View>
                    <Heading
                        title={game.nome}
                        subtitle='Resgate e comece a jogar!'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleResgate}
                    >
                        <Text style={styles.buttonTitle}>Resgatar</Text>
                    </TouchableOpacity>
                    <Heading title='Descrição' subtitle={game.descricao} />
                    <Heading title='Gênero' subtitle={game.genero} />
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
