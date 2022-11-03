const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.put('/games/:game_id', async (req, res) => {
    const game_id = req.params.game_id;

    const {nome, descricao, url_imagem, genero, quantidade} = req.body;

    const game = await prisma.games.update({
        where: {game_id},
        data: {
            nome,
            descricao,
            url_imagem,
            genero,
            quantidade,
        },
    });
    return res.status(200).json(game);
});

module.exports.handler = serverless(app);
