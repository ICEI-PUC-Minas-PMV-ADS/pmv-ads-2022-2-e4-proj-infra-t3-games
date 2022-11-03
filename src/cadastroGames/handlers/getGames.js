const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/games', async (req, res) => {
    const games = await prisma.games.findMany({});
    return res.status(200).json(games);
});

module.exports.handler = serverless(app);
