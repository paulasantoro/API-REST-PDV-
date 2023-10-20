const knex = require('../../database/conexao')



const listarProdutos = async (req, res) => {
    const { categoria_id } = req.query;

    try {
        let query = knex('produtos')
        if (categoria_id) {
            query = query.where('categoria_id', categoria_id)
        }

        const resultado = await query;

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(400).json(error.message)
    }
}
module.exports = { listarProdutos };
