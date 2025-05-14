var database = require('../database/config');

function qtdEscolhasPersonagem() {
	const instrucao = `
  SELECT fkPersonagem, count(fkPersonagem) FROM quiz GROUP BY fkPersonagem;
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	qtdEscolhasPersonagem,
};
