import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {styles} from './styles';
import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
} from 'amazon-cognito-identity-js';

import {ScrollView, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {Input} from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthenticationDetails {
    Username: string;
    Password: string;
}

export function Game() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const handleLogin = () => {
        const userPool = new CognitoUserPool({
            UserPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
            ClientId: `${process.env.REACT_APP_CLIENT_ID}`,
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
                localStorage.setItem(
                    'authenticate',
                    JSON.stringify(authenticate),
                );
                AsyncStorage.setItem(
                    'token',
                    result.getIdToken().getJwtToken(),
                );
            },
            onFailure: function (result) {
                alert(result);
            },
        });
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
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
                    />
                    <TouchableOpacity
                        onPress={() => {
                            handleLogin();
                        }}
                    ></TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
