const knex = require('../../database/conexao')

const detalharProduto = async (req, res) => {
    const { id } = req.params
    try {
        const resultado = await knex('produtos').select('*').where({id}).first();

        if (!resultado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado'})
        }

        return res.status(201).json(resultado)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

module.exports =  detalharProduto ;