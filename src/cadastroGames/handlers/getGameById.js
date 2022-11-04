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

app.get('/games/:game_id', async (req, res) => {
    const game_id = req.params.game_id;
    const game = await prisma.games.findUniqueOrThrow({
        where: {
            game_id,
        },
    });
    return res.status(200).json(game);
});

module.exports.handler = serverless(app);
