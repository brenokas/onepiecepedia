var personagemModel = require('../models/personagemModel');

function nome(req, res) {
	let idPersonagem = req.params.idPersonagemServer;

	personagemModel
		.nome(idPersonagem)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function funcao(req, res) {
	let idPersonagem = req.params.idPersonagemServer;
	personagemModel
		.funcao(idPersonagem)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}
function recompensa(req, res) {
	let idPersonagem = req.params.idPersonagemServer;
	personagemModel
		.recompensa(idPersonagem)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}
function descricao(req, res) {
	let idPersonagem = req.params.idPersonagemServer;
	personagemModel
		.descricao(idPersonagem)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	nome,
	funcao,
	recompensa,
	descricao,
};
