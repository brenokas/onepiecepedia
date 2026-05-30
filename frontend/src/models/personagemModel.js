var database = require('../database/config');

function nome(idPersonagem) {
	let instrucao = `
    SELECT nome FROM personagem WHERE idPersonagem = ${idPersonagem};
  `;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function funcao(idPersonagem) {
	let instrucao = `
    SELECT funcao FROM personagem WHERE idPersonagem = ${idPersonagem};
  `;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function recompensa(idPersonagem) {
	let instrucao = `
    SELECT recompensa FROM personagem WHERE idPersonagem = ${idPersonagem};
  `;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function descricao(idPersonagem) {
	let instrucao = `
    SELECT descricao FROM personagem WHERE idPersonagem = ${idPersonagem};
  `;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	nome,
	funcao,
	recompensa,
	descricao,
};
