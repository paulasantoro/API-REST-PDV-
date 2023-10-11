const bcrypt = require('bcrypt')
const knex = require('../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../jwt')



const listarCategorias = async (req, res) => {
	try {
		const categorias = await knex('categorias')

		return res.status(200).json(categorias)
	} catch (error) {
		return res.status(500).json(error.message)
	}
};

const cadastrarUsuario = async (req, res) => {

}


const login = async (req, res) => {

}

const detalharPerfil = async (req, res) => {

}

const editarPerfil = async (req, res) => {

}




module.exports = {
    cadastrarUsuario,
    login,
    detalharPerfil,
    editarPerfil,
    listarCategorias
}