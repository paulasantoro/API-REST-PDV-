const knex = require('../../database/conexao')

const editarCliente = async (req, res) => {
    const {nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body
    const {id} = req.params

    if (!nome) {
        return res.status(400).json('O campo nome é obrigaótio')
    }
    if (!email) {
        return res.status(400).json('O campo email é obrigaótio')
    }
    if (!cpf) {
        return res.status(400).json('O campo cpf é obrigaótio')
    }

    try {
        const clienteExiste = await knex("clientes").where({id}).first();
		if (!clienteExiste) {
			return res.status(404).json({mensagem: "Cliente não encontrado"});
		}
		if (email) {
            const emailExistente = await knex("clientes").where({email}).first();
			if (clienteExiste.email !== email && emailExistente) {
				return res.status(400).json("O email já está em uso por outro cliente");
			}
						
		}
		if (cpf) {
			const cpfExistente = await knex("clientes").where({cpf}).first();

			if (clienteExiste.cpf !== cpf && cpfExistente) {
				return res.status(400).json("Cpf já cadastrado");
			}
		}

        const clinteAtualizado = await knex('clientes')
        .update({nome, email, cpf, cep, rua, numero, bairro, cidade, estado})
        .where({id});

        if (!clinteAtualizado) {
            return res.status(400).json('Não foi possível atualizar o usuário')
        }

        return res.status(200).json('usuário atualizado com sucesso!');

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = editarCliente

