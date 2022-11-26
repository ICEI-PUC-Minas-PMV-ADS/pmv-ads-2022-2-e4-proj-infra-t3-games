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

app.delete('/games/:id', async (req, res) => {
    const id = req.params.id;

    const remove = await prisma.games.delete({
        where: {
            id,
        },
    });
    res.status(204).send(remove);
});

module.exports.handler = serverless(app);
