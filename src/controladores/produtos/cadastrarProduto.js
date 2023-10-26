const knex = require('../../database/conexao');
const { uploadDeArquivos } = require('../../storage');
const cadastrandoProduto = require('./cadastroDeProduto');


const cadastrarProduto = async (req, res) => {
	const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
	const { file } = req

	if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
		return res.status(404).json("Todos os campos são descrição obrigatórios")
	}

	try {
		const produto = { descricao, quantidade_estoque, valor, categoria_id }
		if (file) {
			const upload = await uploadDeArquivos(file)
			produto.produto_imagem = upload.url
		}

		const cadastroProduto = await cadastrandoProduto(produto);
		return res.status(200).json(cadastroProduto[0])

	} catch (error) {
		return res.status(500).json(error.message)
	}
}

module.exports = cadastrarProduto;