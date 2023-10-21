const knex = require('../../database/conexao')

const detalharCliente = async (req, res) => {
    const {id} = req.params
    try {
        const clienteExiste = await knex('clientes').where({id}).first()

        if (!clienteExiste) {
            return res.status(404).json('Cliente não encontrado')
        }

        return res.status(200).json(clienteExiste);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports = detalharCliente

