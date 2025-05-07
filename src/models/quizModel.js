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

function final(dataHoraInicio, dataHoraFinal, idUsuario, idPersonagem) {
	var instrucao1 = `
    UPDATE quiz SET dataHoraFinal = '${dataHoraFinal}' WHERE dataHoraInicio = '${dataHoraInicio}' AND fkUsuario = ${idUsuario};
  `;

	var instrucao2 = `
	UPDATE quiz SET fkPersonagem = ${idPersonagem} WHERE dataHoraInicio = '${dataHoraInicio}' AND fkUsuario = ${idUsuario};
	`;

	console.log('Executando a instrução SQL: \n' + instrucao1);
	console.log('Executando a instrução SQL: \n' + instrucao2);
	return database.executar(instrucao1), database.executar(instrucao2);
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
