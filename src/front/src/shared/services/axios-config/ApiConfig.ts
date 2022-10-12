import axios from "axios";
import { TokenName } from "../../../ENV";

const api = axios.create({
    baseURL: 'https://m2edrtn0d0.execute-api.us-east-1.amazonaws.com/dev',
    headers: {
        Authorization: JSON.parse(localStorage.getItem(TokenName) || '')
      } 
});

export const Api = () => {
    return api;
}