export interface GameParams {
    id: string;
    nome: string;
    descricao: string;
    url_fullImagem: string;
    genero: string;
}

export interface CodeParams {
    email: string;
}

export interface HomeParams {
    email: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: HomeParams;
            game: GameParams;
            code: CodeParams;
            login: undefined;
            cadastro: undefined;
        }
    }
}
