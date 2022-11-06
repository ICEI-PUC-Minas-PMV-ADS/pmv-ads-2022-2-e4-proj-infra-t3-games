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

  


const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setSigned, setUser} = useUser();

  const signUp = async () =>{
    try {
      const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email: username,          // optional
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
        setUser(user)
        setSigned(true)
    } catch (error) {
        console.log('error signing up:', error);
    }
  }

  return (
    <Container>
     <Header />
      <Headline style={styles.textHeader}>Cadastre-se</Headline>
      <Body>
      <TextInput
          style={styles.input}
          label="Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
        
        <Button
          style={styles.button}
          mode="contained"
          onPress={signUp}>
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

export default Register;