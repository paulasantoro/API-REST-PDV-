const jwt = require('jsonwebtoken')
const knex = require('../database/conexao')
const senhaJwt = require('../jwt')


const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." })
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, senhaJwt)

        const usuario = await knex('usuario').where('id', id).first();

        if (!usuario) {
            return res.status(401).json({ message: 'Não autorizado' })
        }

        const { senha, ...dadosUsuario } = usuario

        req.usuario = dadosUsuario

        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = verificarLogin

