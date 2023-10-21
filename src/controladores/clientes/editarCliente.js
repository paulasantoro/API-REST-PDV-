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
        const clienteExiste = await knex('clientes').where({id}).first();

        const emailExiste = await knex('clientes').where({email}).first();

        const cpfExiste = await knex('clientes').where({cpf}).first();

        if (!clienteExiste) {
            return res.status(400).json('Cliente não encontrado')
        }
        if (emailExiste) {
            return res.status(400).json('Email Já cadastrado')
        }
        if (cpfExiste) {
            return res.status(400).json('Cpf Já cadastrado')
        }

        const clinteAtualizado = await knex('clientes')
        .update({nome, email, cpf, cep, rua, numero, bairro, cidade, estado})
        .where({id});

        if (!clinteAtualizado) {
            return res.status(400).json('Não foi possível atualizar o usuário')
        }

        return res.status(200).json('usuário atualizado com sucesso!');

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = editarCliente

