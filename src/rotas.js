const express = require("express");
const verificarLogin = require("./intermediarios/validacao");

const {
    cadastrarUsuario,
    loginUsuario,
    detalharPerfil,
    editarPerfil,
} = require('./controladores/usuarios.js');
const { listarCategorias } = require("./controladores/categorias");


const rotas = express();

rotas.get("/categoria", listarCategorias)
rotas.post("/usuario", cadastrarUsuario);
rotas.post("/login", loginUsuario);
rotas.use(verificarLogin);

rotas.get("/usuario", detalharPerfil);
rotas.put("/usuario", editarPerfil);

module.exports = rotas;