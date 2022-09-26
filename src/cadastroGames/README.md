# Instruções de uso

1- Abrir o terminal e rodar o seguinte comando:

-   npm install

2- Colocar a url do banco de dados no arquivo .env, conforme exemplo abaixo:

export DATABASE_URL="mongodb+srv://user:password@cluster0.h1zou5l.mongodb.net/test"

3- Rodar o comando:

-   serverless package

Será gerado um arquivo com o nome cadastro-games.zip dentro da pasta .serverless

Esse arquivo deve ser utilizado para criar as funçoes lambda na AWS

Nome da função lambda | Manipulador|
---------------|-----------
cadastro-games-createGame | handlers/createGame.handler
cadastro-games-getGames | handlers/getGames.handler
cadastro-games-getGameById | handlers/getGameById.handler
cadastro-games-updateGame | handlers/updateGame.handler
cadastro-games-deleteGame | handlers/deleteGame.handler
