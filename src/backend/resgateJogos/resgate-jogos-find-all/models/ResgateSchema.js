const mongoose = require('mongoose')

const ResgateSchema = new mongoose.Schema(
    {
        usuario: {
            "nome": String,
            "email": String
        },
        jogo: {
            nome: String,
            descricao: String,
            url_imagem: String,
            genero: String,
            quantidade: Number
        },
        hora: String,
        email_enviado: Boolean,
        codigo_resgate: String
    });

module.exports = ResgateSchema