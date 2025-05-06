var quizModel = require('../models/quizModel');

const dataHoraMomento = () => {
	const date = new Date();
	const ano = date.getFullYear();
	const mes = String(date.getMonth() + 1).padStart(2, '0');
	const dia = String(date.getDate()).padStart(2, '0');
	const horas = String(date.getHours()).padStart(2, '0');
	const minutos = String(date.getMinutes()).padStart(2, '0');
	const segundos = String(date.getSeconds()).padStart(2, '0');

	const dataHoraFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
	return dataHoraFormatada;
};

function inicio(req, res) {
	let dataHoraInicio = dataHoraMomento();
	let idUsuario = req.body.idUsuarioServer;

	if (dataHoraInicio == undefined) {
		res.status(400).send('Erro na captação da data e hora do início!');
	}

	quizModel
		.inicio(dataHoraInicio, idUsuario)
		.then((resposta) => {
			res.status(200).send({ dataHoraInicio: dataHoraInicio });
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function final(req, res) {
	let dataHoraFinal = dataHoraMomento();
	let idUsuario = req.body.idUsuarioServer;
	let dataHoraInicio = req.body.dataHoraInicioFinalServer;

	if (dataHoraFinal == undefined) {
		res.status(400).send('Erro na captação da data e hora do final!');
	}

	quizModel
		.final(dataHoraInicio, dataHoraFinal, idUsuario)
		.then((resposta) => {
			res.status(200).send({
				dataHoraFinal: dataHoraFinal,
				idUsuario: idUsuario,
			});
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function listar(req, res) {
	quizModel
		.final()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	inicio,
	final,
	listar,
};
