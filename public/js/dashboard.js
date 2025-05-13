let proximaAtualizacao;

function exibirDadosUsuario() {
	obterDadosGrafico(sessionStorage.ID_PERSONAGEM);
}

function obterDadosGrafico(idUsuario) {
	if (proximaAtualizacao != undefined) {
		clearTimeout(proximaAtualizacao);
	}

	let divNomePersonagem = document.getElementById('nome-personagem-perfil');
	let divNomePersonagemDashboard = document.getElementById('kpiNome');
	let divDescricaoPersonagem = document.getElementById('perfil-descricaoPersonagem');
	let divRecompensaPersonagem = document.getElementById('perfil-recompensaPersonagem');
	let divFuncaoPersonagem = document.getElementById('perfil-funcaoPersonagem');
	let idPersonagemServer = sessionStorage.ID_PERSONAGEM;
	let varIdUsuario = sessionStorage.ID_USUARIO;
	let divImgPerfil = document.getElementById('img-perfil');
	let kpiTempoDeConclusao = document.getElementById('kpiTempoDeConclusao');
	let kpiMediaTempo = document.getElementById('kpiMediaTempo');
	let kpiPersonagemMaisEscolhido = document.getElementById('kpiPersonagemMaisEscolhido');

	if (idPersonagemServer == 1) divImgPerfil.src = 'img/icons/Luffy-icon.jpg';
	else if (idPersonagemServer == 2) divImgPerfil.src = 'img/icons/Zoro-icon.png';
	else if (idPersonagemServer == 3) divImgPerfil.src = 'img/icons/Nami-icon.jpg';
	else if (idPersonagemServer == 4) divImgPerfil.src = 'img/icons/Sanji-icon.jpg';
	else if (idPersonagemServer == 5) divImgPerfil.src = 'img/icons/Robin-icon.jpg';
	else if (idPersonagemServer == 6) divImgPerfil.src = 'img/icons/Chopper-icon.jpg';
	else if (idPersonagemServer == 7) divImgPerfil.src = 'img/icons/Jinbe-icon.jpg';
	else if (idPersonagemServer == 8) divImgPerfil.src = 'img/icons/Usopp-icon.jpg';
	else divImgPerfil.src = 'img/icons/Brook-icon.jpg';

	fetch(`/personagem/nome/${idPersonagemServer}`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
					divNomePersonagem.innerHTML = resposta[0].nome;
					divNomePersonagemDashboard.innerHTML = resposta[0].nome;
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	fetch(`/personagem/descricao/${idPersonagemServer}`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					divDescricaoPersonagem.innerHTML = resposta[0].descricao;
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	fetch(`/personagem/funcao/${idPersonagemServer}`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					divFuncaoPersonagem.innerHTML = resposta[0].funcao;
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	fetch(`/personagem/recompensa/${idPersonagemServer}`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					let recompensa = resposta[0].recompensa;
					divRecompensaPersonagem.innerHTML = `${recompensa.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	fetch(`/kpi/tempoDeConclusao/${varIdUsuario}`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					kpiTempoDeConclusao.innerHTML = resposta[resposta.length - 1]['Tempo de conclusão'];
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	fetch(`/kpi/mediaTempodeConclusao`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					kpiMediaTempo.innerHTML = resposta[0]['Tempo médio de duração'];
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});

	function nomePersonagemMaisVotado(id) {
		if (id == 1) return 'Monkey D. Luffy';
		else if (id == 2) return 'Roronoa Zoro';
		else if (id == 3) return 'Nami';
		else if (id == 4) return 'Sanji';
		else if (id == 5) return 'Nico Robin';
		else if (id == 6) return 'Chopper';
		else if (id == 7) return 'Jinbe';
		else if (id == 8) return 'Usopp';
		else return 'Brook';
	}

	fetch(`/kpi/personagemMaisEscolhido`, { cache: 'no-store' })
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (resposta) {
					console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

					const idPersonagemMaisVotado = resposta[0].fkPersonagem;
					kpiPersonagemMaisEscolhido.innerHTML = nomePersonagemMaisVotado(idPersonagemMaisVotado);
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});
}
