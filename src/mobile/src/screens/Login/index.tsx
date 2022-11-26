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
interface IAuthenticationDetails {
    Username: string;
    Password: string;
}

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [carregando, setCarregando] = useState<boolean>(false);
    const navigation = useNavigation();

    const handleLogin = async (email: string, senha: string) => {
        if (carregando) {
            return;
        }
        setCarregando(true);
        try {
            await Auth.signIn(email, senha);
            navigation.navigate('login', {screen: 'home', params: {email}});
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
                        title='Login'
                        subtitle='Faça o login para continuar'
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
                            handleLogin(email, senha);
                        }}
                    >
                        <Text style={styles.buttonTitle}>
                            {carregando ? 'Carregando...' : 'Logar'}
                        </Text>
                    </TouchableOpacity>
                    <Heading
                        style={styles.heading}
                        title='Não possuí cadastro?'
                        subtitle='Toque no botão abaixo para realizar o cadastro'
                    />
                    <TouchableOpacity
                        style={styles.buttonCode}
                        onPress={() => {
                            navigation.navigate('cadastro');
                        }}
                    >
                        <Text style={styles.buttonTitleCode}>
                            {carregando ? 'Carregando...' : 'Cadastro'}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
