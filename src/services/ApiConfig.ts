import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosHeaders} from 'axios';
import {useState, useEffect} from 'react';

type autheticate = {
    userName: string;
    token: string;
    time: number;
} & AxiosHeaders;

const [authenticate, setauthenticate] = useState<autheticate>();

useEffect(() => {
    async () => {
        try {
            const saveToken = await AsyncStorage.getItem('token');
            const state = saveToken ? JSON.parse(saveToken) : undefined;
            setauthenticate(state);
        } catch (error) {
            console.log(error);
        }
    };
}, []);

const api = axios.create({
    baseURL: 'https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev', //Resgaste Jogos
    //baseURL: 'https://7qpjgtpo2b.execute-api.us-east-1.amazonaws.com/prod',    //test
    headers: {
        Authorization: authenticate,
    },
});

export const Api = () => {
    return api;
};
