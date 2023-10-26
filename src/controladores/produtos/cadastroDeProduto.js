const knex = require('knex')

const cadastrandoProduto = (produto) => {
    const { descricao, quantidade_estoque, valor, categoria_id, produto_imagem } = produto;

    const produtoCadastrado = knex('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem
        })
        .returning('*')

    return produtoCadastrado
}


/// fazer validaçao caso nao seja cadastrado

module.exports = cadastrandoProduto
