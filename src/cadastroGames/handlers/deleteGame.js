const serverless = require('serverless-http');
const express = require('express');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.delete('/games/:game_id', async (req, res) => {
    const game_id = req.params.game_id;

    const remove = await prisma.games.delete({
        where: {
            game_id,
        },
    });
    res.status(204).send(remove);
});

module.exports.handler = serverless(app);
