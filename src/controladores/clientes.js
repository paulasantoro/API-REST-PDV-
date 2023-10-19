const bcrypt = require('bcrypt')
const knex = require('../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../jwt')

const cadastrarCliente = async (req, res) => {
     const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

	
	try {

		if (!nome || !email || !cpf){
			return res.status(400).json('Os campos nome, email e cpf são obrigatórios.')
	   }

		const clienteCadastrado = await knex('clientes')
		      .where('email', email)
			  .orWhere('cpf', cpf)
			  .first();

			  if (clienteCadastrado){
				  return res.status(400).json('Email ou CPF já está cadastrado no sistema!')
			}

			const clienteNovo = await knex('clientes').insert({
				nome,
				email,
				cpf,
				cep,
				rua,
				numero,
				bairro,
				cidade,
				estado

			})

			.returning('*');

	    return res.status(201).json(clienteNovo);

    }catch (error){
		return res.status(500).json(error.message);
	}
};

const editarCliente = async (req, res) => {

}


const listarClientes = async (req, res) => {

}

const detalharCliente = async (req, res) => {

}


module.exports = {
	cadastrarCliente,
	editarCliente,
	listarClientes,
	detalharCliente
}
