const bcrypt = require('bcrypt')
const knex = require('../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../jwt')

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

		if (!descricao){
			return res.status(404).json("O campo descrição é obrigatório")
		}
		if (!quantidade_estoque){
			return res.status(404).json("O campo quantidade do estoque é obrigatório")
		}
		if (!valor){
			return res.status(404).json("O campo valor é obrigatório")
		}
		if (!categoria_id){
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

			   if (!produtoCadastrado[0]){
					return res.status(404).json("O produto não foi cadastrado.")
				}


			return res.status(200).json(produtoCadastrado[0])
        }catch (error) {
	    return res.status(500).json(error.message)
    }

}

const editarProduto = async (req, res) => {

}


const listarProdutos = async (req, res) => {
    const { categoria_id } = req.query;

	try {
		let query = knex ('produtos')
				   if (categoria_id){
					   query = query.where('categoria_id', categoria_id)
				   }

				   const resultado = await query;
			  
		        return res.status(200).json(resultado);
		
	} catch (error){
        return res.status(400).json(error.message)
	}
}

const detalharProduto = async (req, res) => {

}

const excluirProduto = async (req, res) => {

}


module.exports = {
	cadastrarProduto,
	editarProduto,
	listarProdutos,
	detalharProduto,
    excluirProduto
}
