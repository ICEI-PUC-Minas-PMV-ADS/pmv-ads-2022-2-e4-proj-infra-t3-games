import axios from 'axios';

const api = axios.create({
    baseURL: 'https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev',   //Resgaste Jogos
    //baseURL: 'https://7qpjgtpo2b.execute-api.us-east-1.amazonaws.com/prod',    //test
    headers: {
        Authorization: localStorage.getItem('token') || " "
    }
});

export const Api = () => {
    return api;
};
