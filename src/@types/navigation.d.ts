export interface GameParams {
    id: string;
    nome: string;
    descricao: string;
    url_fullImagem: string;
    genero: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: GameParams;
        }
    }
}
