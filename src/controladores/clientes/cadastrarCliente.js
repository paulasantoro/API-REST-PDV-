const knex = require('../../database/conexao')

const cadastrarCliente = async (req, res) => {
	const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;


	try {

		if (!nome || !email || !cpf) {
			return res.status(400).json('Os campos nome, email e cpf são obrigatórios.')
		}

		const clienteCadastrado = await knex('clientes')
			.where({email})
			.orWhere({cpf})
			.first();

		if (clienteCadastrado) {
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

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
};

module.exports = cadastrarCliente
