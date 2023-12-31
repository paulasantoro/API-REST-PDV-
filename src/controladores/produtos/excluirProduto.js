const knex = require('../../database/conexao');
const { excluirArquivo } = require('../../storage');

const excluirProduto = async (req, res) => {
    const { id } = req.params
    try {
        const produtoEmPedidos = await knex('pedido_produtos').where({ produto_id: id }).first();
        if (produtoEmPedidos) {
            return res.status(400).json('Este produto está vinculado a um pedido portanto não pode ser excluido');
        }

        const produtoExiste = await knex('produtos').where({ id }).first()

        if (!produtoExiste) {
            return res.status(404).json('Produto não encontrado')
        }

        if (produtoExiste.produto_imagem) {
            await excluirArquivo(`produtos/${produtoExiste.produto_imagem}`);
        }

        const excluirProduto = await knex('produtos').del().where({ id })

        if (!excluirProduto) {
            return res.status(400).json('Não foi possível excluir o produto')
        }

        return res.status(200).json('Produto excluido com sucesso ');

    } catch (error) {
        console.error('Erro:', error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}


module.exports = excluirProduto;