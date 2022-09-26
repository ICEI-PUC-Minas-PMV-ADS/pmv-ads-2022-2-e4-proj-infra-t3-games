const serverless = require('serverless-http');
const express = require('express');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get('/games', async (req, res) => {
    const games = await prisma.games.findMany({});
    return res.status(200).json(games);
});

module.exports.handler = serverless(app);
