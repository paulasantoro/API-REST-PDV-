const knex = require('../../database/conexao')


const cadastrarProduto = async (req, res) => {
	const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

	if (!descricao) {
		return res.status(404).json("O campo descrição é obrigatório")
	}
	if (!quantidade_estoque) {
		return res.status(404).json("O campo quantidade do estoque é obrigatório")
	}
	if (!valor) {
		return res.status(404).json("O campo valor é obrigatório")
	}
	if (!categoria_id) {
		return res.status(404).json("O campo categoria id é obrigatório")
	}

	try {

		const produtoCadastrado = await knex('produtos')
			.insert({
				descricao,
				quantidade_estoque,
				valor,
				categoria_id
			})
			.returning('*')

		if (!produtoCadastrado[0]) {
			return res.status(404).json("O produto não foi cadastrado.")
		}

		return res.status(200).json(produtoCadastrado[0])
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = cadastrarProduto;
