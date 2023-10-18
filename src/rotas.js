const express = require("express");
const verificarLogin = require("./intermediarios/validacao");

const {
    cadastrarUsuario,
    loginUsuario,
    detalharPerfil,
    editarPerfil,
} = require('./controladores/usuarios.js');

const { listarCategorias } = require("./controladores/categorias");

const { 
    cadastrarCliente, 
    editarCliente, 
    listarClientes, 
    detalharCliente 
} = require("./controladores/clientes");

const { 
    cadastrarProduto, 
    editarProduto, 
    listarProdutos, 
    detalharProduto, 
    excluirProduto 
} = require("./controladores/produtos");

const rotas = express();

rotas.get("/categoria", listarCategorias)

rotas.post("/usuario", cadastrarUsuario);
rotas.post("/login", loginUsuario);

rotas.use(verificarLogin);

rotas.put("/usuario", editarPerfil);
rotas.get("/usuario", detalharPerfil);

rotas.post("cliente", cadastrarCliente);
rotas.put("cliente/:id", editarCliente);
rotas.get("cliente", listarClientes);
rotas.get("cliente/:id", detalharCliente);

rotas.post("produto", cadastrarProduto);
rotas.put("produto/:id", editarProduto);
rotas.get("produto", listarProdutos);
rotas.get("produto/:id", detalharProduto);
rotas.delete("produto/:id", excluirProduto);


module.exports = rotas;