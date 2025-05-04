var database = require('../database/config');

function listar() {
	var instrucao = `
    SELECT * FROM personagem;
  `;

	return database.executar(instrucao);
}

function cadastrar(nome) {
	var instrucao = `
    INSERT INTO personagem (nome) VALUES ('${nome}');
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	cadastrar,
	listar,
};
