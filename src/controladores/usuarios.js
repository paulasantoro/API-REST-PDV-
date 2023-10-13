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
	const { nome, email, senha } = req.body

	try {

		if (!nome) {
			return res.status(400).json({ mensagem: 'O Nome é Obrigatório' })
		}
		if (!email) {
			return res.status(400).json({ mensagem: 'O email é Obrigatório' })
		}

		if (!senha) {
			return res.status(400).json({ mensagem: 'O senha é Obrigatória' })
		}


		// const queryClienteEmail = 'select * from clientes where email = $1'
		// const emailExistente = await pool.query(queryClienteEmail, [email])

		const emailExistente = await knex('usuarios').where({ email })


		if (emailExistente.length > 0) {
			return res
				.status(400)
				.json({ mensagem: 'E-mail informado já está cadastrado' })
		}

		const senhaCriptografada = await bcrypt.hash(senha, 10);


		// const query = `
		//     insert into clientes (nome, email, telefone) 
		//     values ($1, $2, $3) returning *
		// `
		// const params = [nome, email, telefone]
		// const cliente = await pool.query(query, params)

		const cliente = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning('*')


		return res.status(201).json(cliente)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

const loginUsuario = async (req, res) => {
	const { email, senha } = req.body;
	try {
		const usuario = await knex('usuarios').where('email', email).first();

		if (!usuario) {
			return res.status(401).send({ message: "Autenticação falhou" });
		}

		const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

		if (!senhaCorreta) {
			return res.status(401).send({ message: "Autenticação falhou" });
		}

		const token = jwt.sign(
			{ id: usuario.id },
			senhaJwt,
			{ expiresIn: "8h" }
		);
		return res.status(200).send({ token });

	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}



const detalharPerfil = async (req, res) => {

}

const editarPerfil = async (req, res) => {

}




module.exports = {
	cadastrarUsuario,
	loginUsuario,
	detalharPerfil,
	editarPerfil,
	listarCategorias
}