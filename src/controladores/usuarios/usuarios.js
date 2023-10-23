const bcrypt = require('bcrypt')
const knex = require('../../database/conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../jwt')

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

		const emailExistente = await knex('usuarios').where({ email })


		if (emailExistente.length > 0) {
			return res
				.status(400)
				.json({ mensagem: 'E-mail informado já está cadastrado' })
		}

		const senhaCriptografada = await bcrypt.hash(senha, 10);

		const cliente = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada }).returning('*')

		delete cliente[0].senha

		return res.status(201).json(cliente)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno no servidor' })
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
        return res.status(500).json({ mensagem: 'Erro interno no servidor' })
    }
}

const detalharPerfil = async (req, res) => {
	const { id } = req.usuario
	try {
		const resultado = await knex('usuarios').select('id', 'nome', 'email').where('id', id)

		return res.status(201).json(resultado)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno no servidor' })
	}
}

const editarPerfil = async (req, res) => {
	const { nome, email, senha } = req.body;
	const { id } = req.usuario;
	const { ids } = req.params



	

	try {

		const idEncontrado = await knex('usuarios').where('id', ids);

		if (idEncontrado[0].id !== id) {
			return res.status(400).json({ message: "Não Autorizado" });
		}

		const emailEncontrado = await knex('usuarios').where({email});

		if (emailEncontrado.length > 0) {
			return res.status(400).json({ message: "Esse e-mail já está em uso" })
		}


		const senhaHashed = await bcrypt.hash(senha, 10);

		await knex('usuarios')
		.update({
		nome,
		email,
		senha: senhaHashed
		})
		.where({id});

		return res.status(204).json();


	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno no servidor' })
	}
};

module.exports = {
	cadastrarUsuario,
	loginUsuario,
	detalharPerfil,
	editarPerfil
}
