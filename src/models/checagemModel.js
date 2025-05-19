var database = require('../database/config');

function checagemQuiz(idUsuario) {
	const instrucao = `
    SELECT EXISTS(SELECT 1 FROM quiz WHERE fkUsuario = ${idUsuario});
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function pegarIdPersonagem(idUsuario) {
	const instrucao = `
    SELECT fkPersonagem FROM quiz WHERE fkUsuario = ${idUsuario} ORDER BY dataHoraFinal DESC LIMIT 1;
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	checagemQuiz,
	pegarIdPersonagem,
};
