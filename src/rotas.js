const express = require("express");
const verificarLogin = require("./intermediarios/validacao");
const multer = require('./multer')

const listarCategorias = require("./controladores/categorias/categorias");

const {
    cadastrarUsuario,
    loginUsuario,
    detalharPerfil,
    editarPerfil,
} = require('./controladores/usuarios/usuarios');


const cadastrarCliente = require("./controladores/clientes/cadastrarCliente");
const detalharCliente = require("./controladores/clientes/detalharCliente");
const editarCliente = require('./controladores/clientes/editarCliente');
const listarClientes = require("./controladores/clientes/listarClientes");

const cadastrarProduto = require('./controladores/produtos/cadastrarProduto')
const detalharProduto = require("./controladores/produtos/detalharProduto")
const editarProduto = require("./controladores/produtos/editarProduto")
const excluirProduto = require("./controladores/produtos/excluirProduto")
const listarProdutos = require("./controladores/produtos/listarProdutos");
const cadastrarPedido = require("./controladores/pedidos/cadastrarPedido");
const listarPedido = require("./controladores/pedidos/listarPedido");
const adicionarImagemProduto = require("./controladores/produtos/adicionarImagem");

const rotas = express();

rotas.get("/categoria", listarCategorias)

rotas.post("/usuario", cadastrarUsuario);
rotas.post("/login", loginUsuario);

rotas.use(verificarLogin);

rotas.put("/usuario/:ids", editarPerfil);
rotas.get("/usuario", detalharPerfil);

rotas.post("/cliente", cadastrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", detalharCliente);

rotas.post("/produto", cadastrarProduto);
rotas.post("/produto/:id/imagem", multer.single('produto_imagem'), adicionarImagemProduto);
rotas.put("/produto/:id", editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto);
rotas.delete("/produto/:id", excluirProduto);

rotas.post("/pedido", cadastrarPedido);
rotas.get("/pedido", listarPedido);

module.exports = rotas;