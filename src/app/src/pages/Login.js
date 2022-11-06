import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline, Text } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Logo from '../components/Logo';
import Header from './../components/Header';
import { Auth } from 'aws-amplify';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';



const Login = () => {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setSigned, setUser} = useUser();


  const navigation = useNavigation();

  const signIn = async () =>{
    try {
        const user = await Auth.signIn(username, password);
        setUser(user)
        setSigned(true)
        navigation.navigate('Home')
    } catch (error) {
        console.log('error signing in', error);
    }
  }
  
  return (
    <Container>
      <Header />

      <Headline style={styles.textHeader}>Login</Headline>
        <TextInput
          style={styles.input}

          label="Username"
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
          onPress={signIn}>
          LOGIN
        </Button>
        <View style={{flex: 1, flexDirection: 'row'}}
>
        <Button
          style={styles.btn_cadastro}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          Cadastrar
        </Button>
        <Button
          style={styles.butt}
          mode="outlined"
          onPress={() => navigation.navigate('ConfirmarCodigo')}>
          Confirmar Codigo
        </Button>
        </View>
        
     
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
  },

  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
    backgroundColor: 'rgba(217, 217, 217, 0.29)',

  },
  input: {
    backgroundColor:'#908e91',
    border: '4 solid #000000',
    boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    margin: 10,
    padingLeft: 40,

    
  },
  btn_cadastro: {
    marginBottom: 8,
    width: 200,
    height: 37,
    left: 0,
    top: 30,
    background: '#7800B3',
    borderRadius: 20,

  },

  btn_cadastr: {
    marginBottom: 8,
    width: 200,
    height: 37,
    left: 50,
    top: 30,


    background: '#7800B3',
    borderRadius: 20,

  },
  textHeader: {
    textAlign: 'center',
    border: '#7800B3',
    color: '#9b9b9b',
    },
  butoo: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

  container: {
    flex: 1,
    position: 'absolute',
    width: 983,
    height: 0,
    left: 21,
    top: 107,
    background: 'rgba(217, 217, 217, 0.29)',

    boxShadow: '0 4 4 rgba(0, 0, 0, 0.25)',
  },
  butt: {
    marginBottom: 8,
    width: 200,
    height: 37,
    left: 0,
    top: 30,
    background: '#7800B3',
    borderRadius: 20,
  }

});

export default Login;
