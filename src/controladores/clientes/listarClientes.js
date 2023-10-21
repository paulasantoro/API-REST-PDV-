const knex = require('../../database/conexao')

const listarClientes = async (req, res) => {
    try {
        const todosClientes = await knex('clientes')

        return res.status(200).json(todosClientes)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = listarClientes