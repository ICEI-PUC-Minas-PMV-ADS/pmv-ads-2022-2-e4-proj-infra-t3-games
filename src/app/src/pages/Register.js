import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('E-mail');
  const [password, setPassword] = useState('pucminas');
  const [confirmar, SetConfirmar] = useState('pucminas');


  const handleRegister = () => {

    register({
      email: email,
      password: password,
      confirmar: confirmar

    }).then( res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde ');
      }
      
    });
    
  }

  return (
    <Container>
     <Header title={'uu'} />
      <Headline style={styles.textHeader}>Cadastre-se</Headline>
      <Body>
      <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
        style={styles.input}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <TextInput
        style={styles.input}
          label="Confirmar Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => SetConfirmar(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Cadastrar
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Já tenho cadastro
        </Button>
      </Body>
      <Logo />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    width: 220,
    height: 37,
    left: 100,
    top: 20,
    background: '#7800B3',
    borderRadius: 20,
    textColor: '#C2C2C2', 
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  input: {
    background: 'rgba(217, 217, 217, 0.29)',
    border: '4 solid #000000',
    boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    margin: 10,
    padingLeft: 40,
  },
});

export default Register;
