import {SafeAreaView} from 'react-native-safe-area-context';

import {Background} from '../../components/Background';
import {styles} from './styles';

import {ScrollView, TouchableOpacity, Text, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../components/Input';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Heading} from '../../components/Heading';
import logoImg from '../../assets/logowhite.png';
import {Auth} from 'aws-amplify';
import {RouteProp} from '@react-navigation/native';

type RouteParams = {
    Code: {
        email: string;
    };
};

export function Code() {
    const route = useRoute<RouteProp<RouteParams, 'Code'>>();
    const [codigo, setCodigo] = useState<string>('');
    const [email, setEmail] = useState(route?.params?.email);
    const [carregando, setCarregando] = useState(false);

    const navigation = useNavigation();

    const handleConfirmar = async (codigo: string) => {
        if (carregando) {
            return;
        }
        setCarregando(true);
        try {
            await Auth.confirmSignUp(email, codigo);
            navigation.navigate('login', {});
        } catch (error: any) {
            Alert.alert('Opa', error.message);
        }
        setCarregando(false);
    };

    const handleResend = async (email: string) => {
        if (carregando) {
            return;
        }
        setCarregando(true);
        try {
            await Auth.resendSignUp(email);
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
                        title='Confirmar conta'
                        subtitle='Insira o código enviado para o seu e-mail'
                    />
                    <Input
                        label='Email'
                        placeholder='Email'
                        onChangeText={(value: string) => setEmail(value)}
                        value={email}
                    />
                    <Input
                        label='Código'
                        placeholder='Código'
                        onChangeText={(value: string) => setCodigo(value)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleConfirmar(codigo);
                        }}
                    >
                        <Text style={styles.buttonTitle}>
                            {carregando ? 'Carregando...' : 'Enviar'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCode}
                        onPress={() => {
                            handleResend(email);
                        }}
                    >
                        <Text style={styles.buttonTitleCode}>
                            {carregando ? 'Carregando...' : 'Reenviar código'}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
}
