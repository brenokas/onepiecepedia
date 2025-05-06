var database = require('../database/config');

function inicio(dataHoraInicio) {

	// nao consegui acessar o ID do usuario :(
	// tentativas: session storage, req.bodyS
	
	var instrucao = `
    INSERT INTO quiz (fkUsuario, dataHoraInicio) VALUES ('', '${dataHoraInicio}') ;
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function final(dataHoraFinal) {
	var instrucao = `
    INSERT INTO quiz (fkUsuario, dataHoraFinal) VALUES ('', '${dataHoraFinal}');
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
