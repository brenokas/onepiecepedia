var checagemModel = require('../models/checagemModel');

function checagemQuiz(req, res) {
	const idUsuario = req.params.idUsuario;

	checagemModel
		.checagemQuiz(idUsuario)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function pegarIdPersonagem(req, res) {
	const idUsuario = req.params.idUsuario;
	checagemModel
		.pegarIdPersonagem(idUsuario)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	checagemQuiz,
	pegarIdPersonagem,
};
