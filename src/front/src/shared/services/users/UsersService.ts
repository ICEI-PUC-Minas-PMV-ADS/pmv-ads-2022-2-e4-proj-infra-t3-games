import { Api } from "../axios-config/ApiConfig";
import { ApiException } from "../ApiException";


export interface IUser {
    id: string;
    name: string;
    Email: string;
    CreatedAt: string;
}

const getAll = async (): Promise<IUser[] | ApiException> => {
    try {
        const { data } = await Api().get('/users');
        return data;
    } catch (err: any) {
        return new ApiException(err || 'Erro ao consultar a API.')
    }
};


export const UsersService = {
    getAll
};