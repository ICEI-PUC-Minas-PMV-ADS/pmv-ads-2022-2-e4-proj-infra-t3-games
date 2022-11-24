import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {styles} from './styles';
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
} from 'amazon-cognito-identity-js';

import {ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Heading} from '../../components/Heading';
import logoImg from '../../assets/logowhite.png';
interface IAuthenticationDetails {
    Username: string;
    Password: string;
}

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const navigation = useNavigation();

    const handleLogin = () => {
        const userPool = new CognitoUserPool({
            UserPoolId: `us-east-1_ZRiDg99ZZ`,
            ClientId: `2clk64ln5ueapqfdrudg2ui639`,
        });
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: senha,
        });
        const userData = {Username: email, Pool: userPool};

        new CognitoUser(userData).authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                let authenticate = {
                    token: result.getIdToken().getJwtToken(),
                    userName: email,
                    time: new Date().getTime(),
                };
                AsyncStorage.setItem(
                    'authenticate',
                    JSON.stringify(authenticate),
                );
                AsyncStorage.setItem(
                    'token',
                    result.getIdToken().getJwtToken(),
                );
                navigation.navigate('home');
            },
            onFailure: function (result) {
                alert(result);
            },
        });
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <Heading title='Login' subtitle='Faça o login para continuar' />
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <Input
                        label='Usuário'
                        placeholder='usuario@email.com'
                        onChangeText={(value: string) => setEmail(value)}
                    />
                    <Input
                        label='Senha'
                        placeholder='123456'
                        onChangeText={(value: string) => setSenha(value)}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleLogin();
                        }}
                    >
                        <Text style={styles.buttonTitle}>Logar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
