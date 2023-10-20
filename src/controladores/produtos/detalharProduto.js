const bcrypt = require('bcrypt')
const knex = require('../../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../jwt')

const detalharProduto = async (req, res) => {
    const { id } = req.params
    try {
        const resultado = await knex('produtos').select('id', 'descricao', 'quantidade_estoque', 'valor', 'categoria_id').where('id', id).first();

        return res.status(201).json(resultado)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }


}

module.exports = { detalharProduto };