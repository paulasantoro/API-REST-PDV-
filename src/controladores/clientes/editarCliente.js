const knex = require('../../database/conexao')

const editarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
    const { id } = req.params;

    if (!nome || !email || !cpf) {
        return res.status(400).json('Os campos nome, email e cpf são obrigatórios');
    }

    try {
        const clienteExistente = await knex('clientes').where({ id }).first();
        if (!clienteExistente) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        }

        if (email !== clienteExistente.email) {
            const emailExistente = await knex('clientes').where({ email }).first();
            if (emailExistente) {
                return res.status(400).json('O email já está em uso por outro cliente');
            }
        }

        if (cpf !== clienteExistente.cpf) {
            const cpfExistente = await knex('clientes').where({ cpf }).first();
            if (cpfExistente) {
                return res.status(400).json('Cpf já cadastrado');
            }
        }

        const clienteAtualizado = await knex('clientes')
            .where({ id })
            .update({ nome, email, cpf, cep, rua, numero, bairro, cidade, estado });

        if (!clienteAtualizado) {
            return res.status(400).json('Não foi possível atualizar o usuário');
        }

        return res.status(200).json('Usuário atualizado com sucesso!');
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};


module.exports = editarCliente

