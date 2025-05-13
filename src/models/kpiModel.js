var database = require('../database/config');

function tempoDeConclusao(idUsuario) {
	const instrucao = `
    SELECT timediff(dataHoraFinal, dataHoraInicio) 'Tempo de conclusão' FROM quiz WHERE fkUsuario = ${idUsuario};
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function mediaTempodeConclusao() {
	const instrucao = `
	SELECT sec_to_time(round(avg(timestampdiff(second, dataHoraInicio, dataHoraFinal)))) 'Tempo médio de duração' from quiz;
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function personagemMaisEscolhido() {
	const instrucao = `
	select fkPersonagem, count(fkPersonagem) from quiz group by fkPersonagem order by count(fkPersonagem) desc limit 1;
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	tempoDeConclusao,
	mediaTempodeConclusao,
	personagemMaisEscolhido,
};
