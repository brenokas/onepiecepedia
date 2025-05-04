var database = require('../database/config');

function inicio(dataHoraInicio) {
	var instrucao = `
    INSERT INTO quiz (dataHoraInicio) VALUES ('${dataHoraInicio}');
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function final(dataHoraFinal) {
	var instrucao = `
    INSERT INTO QUIZ (dataHoraFinal) VALUES ('${dataHoraFinal}');
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function listar() {
	var instrucao = `
    SELECT * FROM quiz;
  `;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	inicio,
	final,
	listar,
};
