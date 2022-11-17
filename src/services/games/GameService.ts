import { Api } from '../AxiosConfig/ApiConfig';

interface IGame {
  nome: string;
  descricao: string;
  url_imagem: string;
  genero: string;
  quantidade: number;
}

const cadastrar = async (dados: Omit<IGame, 'id'>): Promise<string | Error> => {
  try {
    const { data } = await (await Api().post<IGame>('/games', dados));
    if (data) {
      return 'Game criado com sucesso'
    }
    return new Error('Erro1: error ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error('Erro2: error ao criar o registro.');
  }
};


export const GamesService = {
  cadastrar,
};