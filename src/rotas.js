const express = require("express");
const validarSenha = require("./intermediarios/validacao");


const {
    cadastrarUsuario,
    login,
    detalharPerfil,
    editarPerfil,
    listarCategorias
} = require('./controladores/usuarios.js')


const rotas = express();

rotas.get("/categoria", listarCategorias)
// rotas.post("/usuario", cadastrarUsuario);  
// rotas.post("/login", login);
// rotas.get("/usuario", detalharPerfil); 
// rotas.put('/usuario', editarPerfil ); 

module.exports = rotas;