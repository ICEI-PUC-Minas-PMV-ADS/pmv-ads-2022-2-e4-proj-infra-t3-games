const serverless = require('serverless-http');
const express = require('express');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(express.json());

app.put('/games/:id', async (req, res) => {
    const id = req.params.game_id;

    const {nome, descricao, url_imagem, url_fullImagem, genero, quantidade} =
        req.body;

    const game = await prisma.games.update({
        where: {id},
        data: {
            nome,
            descricao,
            url_fullImagem,
            url_imagem,
            genero,
            quantidade,
        },
    });
    return res.status(200).json(game);
});

module.exports.handler = serverless(app);
