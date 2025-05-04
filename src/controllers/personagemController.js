var personagemModel = require('../models/personagemModel');

function listar(req, res) {
	personagemModel
		.listar()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function cadastrar(req, res) {
	var nome = req.body.personagemNome;

	if (nome == undefined) {
		res.status(200).send('O nome do personagem está undefined!');
	}

	personagemModel
		.cadastrar(nome)
		.then((resposta) => {
			res.status(200).send('Personagem cadastrado com sucesso!');
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	listar,
	cadastrar,
};
