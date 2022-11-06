import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Header from '../components/Header';
import { Auth } from 'aws-amplify';
import { useUser } from '../contexts/UserContext';

import { useNavigation } from '@react-navigation/native';

  


const ConfirmarCodigo = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');


  const confirmSignUp = async  () => {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Login')
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

  return (
    <Container>
     <Header />
      <Headline style={styles.textHeader}>Confirmar Usuario</Headline>
      <Body>
      <TextInput
          style={styles.input}
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
        style={styles.input}
          label="Code"
          value={code}
          secureTextEntry
          onChangeText={(text) => setCode(text)}
          left={<TextInput.Icon name="key" />}
        />
        
        <Button
          style={styles.button}
          mode="contained"
          onPress={confirmSignUp}>
          Confirmar Cadastro
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
    color: '#9b9b9b',

  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  input: {
    backgroundColor:'#908e91',
    border: '4 solid #000000',
    boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    margin: 10,
    padingLeft: 40,
  },
});

export default ConfirmarCodigo;
