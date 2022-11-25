import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {styles} from './styles';

import {ScrollView, TouchableOpacity, Text, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components/Input';

import {useNavigation} from '@react-navigation/native';
import {Heading} from '../../components/Heading';
import logoImg from '../../assets/logowhite.png';
import {Auth} from 'aws-amplify';

export function Cadastro() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [carregando, setCarregando] = useState(false);

    const navigation = useNavigation();

    const handleCadastro = async (email: string, senha: string) => {
        if (carregando) {
            return;
        }
        setCarregando(true);
        try {
            await Auth.signUp(email, senha);

            navigation.navigate('code', {email});
        } catch (error: any) {
            Alert.alert('Opa', error.message);
        }
        setCarregando(false);
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Heading
                        style={styles.heading}
                        title='Cadastro'
                        subtitle='Faça seu cadastro e comece a resgatar os jogos'
                    />
                    <Input
                        label='Usuário'
                        placeholder='Usuário'
                        onChangeText={(value: string) => setEmail(value)}
                    />
                    <Input
                        label='Senha'
                        placeholder='Senha'
                        onChangeText={(value: string) => setSenha(value)}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleCadastro(email, senha);
                        }}
                    >
                        <Text style={styles.buttonTitle}>
                            {carregando ? 'Carregando...' : 'Cadastrar'}
                        </Text>
                    </TouchableOpacity>
                    <Heading
                        style={styles.heading}
                        title='Já possuí login?'
                        subtitle='Toque no botão abaixo para realizar o login'
                    />
                    <TouchableOpacity
                        style={styles.buttonCode}
                        onPress={() => {
                            navigation.navigate('login', {});
                        }}
                    >
                        <Text style={styles.buttonTitleCode}>
                            {carregando ? 'Carregando...' : 'Login'}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
