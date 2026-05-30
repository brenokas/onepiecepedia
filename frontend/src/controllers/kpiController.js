var kpiModel = require('../models/kpiModel');

function tempoDeConclusao(req, res) {
	let idUsuario = req.params.idUsuario;

	kpiModel
		.tempoDeConclusao(idUsuario)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function mediaTempodeConclusao(req, res) {
	kpiModel
		.mediaTempodeConclusao()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function personagemMaisEscolhido(req, res) {
	kpiModel
		.personagemMaisEscolhido()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	tempoDeConclusao,
	mediaTempodeConclusao,
	personagemMaisEscolhido
};
