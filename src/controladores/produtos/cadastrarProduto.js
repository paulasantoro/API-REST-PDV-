const knex = require('../../database/conexao');
const multer = require('multer')
const { uploadDeArquivos } = require('../../storage');
const upload = multer();


const cadastrarProduto = async (req, res) => {
	const { descricao, quantidade_estoque, valor, categoria_id, produto_imagem } = req.body;

	if (!descricao || !quantidade_estoque || !valor || !categoria_id) {
		return res.status(404).json("Todos os campos são descrição obrigatórios")
	}

	let imagemURL = null;

	if (req.file) {
		try {
			const url = await uploadDeArquivos(req.file.buffer, req.file.mimetype);
			imagemURL = url;

		} catch (error) {
			return res.statjs(500).json("Erro ao fazer upload da imagem")
		}
	}

	try {

		const produtoCadastrado = await knex('produtos')
			.insert({
				descricao,
				quantidade_estoque,
				valor,
				categoria_id,
				produto_imagem: imagemURL
			})
			.returning('*')

		if (!produtoCadastrado[0]) {
			return res.status(404).json("O produto não foi cadastrado.")
		}


		return res.status(200).json(produtoCadastrado[0])
	} catch (error) {
		return res.status(500).json(error.message)
	}

}

module.exports = { cadastrarProduto };
