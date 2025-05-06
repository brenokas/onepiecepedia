var database = require('../database/config');

function inicio(dataHoraInicio, idUsuario) {

	// nao consegui acessar o ID do usuario :(
	// tentativas: session storage, req.bodyS
	
	var instrucao = `
    INSERT INTO quiz (fkUsuario, dataHoraInicio) VALUES ('${idUsuario}', '${dataHoraInicio}') ;
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function final(dataHoraInicio, dataHoraFinal, idUsuario) {
	var instrucao = `
    UPDATE quiz SET dataHoraFinal = '${dataHoraFinal}' WHERE dataHoraInicio = '${dataHoraInicio}' AND fkUsuario = '${idUsuario}';
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
