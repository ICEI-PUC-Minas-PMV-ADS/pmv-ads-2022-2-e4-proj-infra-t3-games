export interface GameParams {
    id: string;
    nome: string;
    descricao: string;
    url_fullImagem: string;
    genero: string;
    token: string;
    userEmail: string;
}

export interface CodeParams {
    email: string;
}

export interface HomeParams {
    email: string;
}

export interface LoginParams {
    screen?: string;
    params?: object;
}

export interface BibliotecaParams {
    token: string;
    userEmail: string;
}
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: HomeParams;
            game: GameParams;
            biblioteca: BiblliotecaParams;
            code: CodeParams;
            login: LoginParams;
            cadastro: undefined;
        }
    }
}
