const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/games', async (req, res) => {
    const {nome, descricao, url_imagem, genero, quantidade} = req.body;

    const game = await prisma.games.create({
        data: {
            nome,
            descricao,
            url_imagem,
            genero,
            quantidade,
        },
    });
    return res.status(201).json(game);
});
module.exports.handler = serverless(app);
