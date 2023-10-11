require('dotenv').config()
const knex = require('./database/conexao')
const express = require("express");
const app = express()
const cors = require('cors')

const rotas = require("./rotas")

app.use(cors())
app.use(express.json());

app.use(rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}!`);
});

