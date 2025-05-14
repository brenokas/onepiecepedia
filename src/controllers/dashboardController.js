var dashboardModel = require('../models/dashboardModel');

function qtdEscolhasPersonagem(req, res) {
	dashboardModel
		.qtdEscolhasPersonagem()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	qtdEscolhasPersonagem,
};
