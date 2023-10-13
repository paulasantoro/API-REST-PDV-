const express = require("express");
const verificarLogin = require("./intermediarios/validacao");

const {
    cadastrarUsuario,
    loginUsuario,
    detalharPerfil,
    editarPerfil,
    listarCategorias
} = require('./controladores/usuarios.js');


const rotas = express();

rotas.get("/categoria", listarCategorias)
rotas.post("/usuario", cadastrarUsuario);
rotas.post("/login", loginUsuario);
rotas.use(verificarLogin);

rotas.get("/usuario", detalharPerfil);
rotas.put("/usuario", editarPerfil);

module.exports = rotas;