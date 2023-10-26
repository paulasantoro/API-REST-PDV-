const knex = require('../../database/conexao')

const editarProduto = async (req, res) => {
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
        return res.status(400).json({ messagem: "Todos os campos são obrigatórios" })
    }
    try {
        const produtoEncontrado = await knex('produtos').where('id', id);

        if (produtoEncontrado.length === 0) {
            return res.status(400).json({ mensagem: "Produto não encontrado" })
        }

        const categoriaEncontrada = await knex('categorias').where('id', categoria_id);
        if (categoriaEncontrada.length === 0) {
            return res.status(400).json({ mensagem: "A categoria informada não existe" })
        }

        await knex('produtos').where('id', id).update({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        });

        return res.status(200).json({ mensagem: "Produto atualizado com sucesso!" })

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = editarProduto;
