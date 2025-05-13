document.addEventListener('DOMContentLoaded', () => {
	const botao_sair = document.getElementById('botao-sair');
	const containerMsg = document.getElementById('container-msg');

	if (sessionStorage.ID_PERSONAGEM == undefined) {
		const container = document.getElementById('container-perfil');
		const containerDash = document.getElementById('container-dashboard');
		const containerButton = document.getElementById('button-container');
		const nomeUsuario = sessionStorage.NOME_USUARIO;

		container.style.display = 'none';
		containerDash.style.display = 'none';
		containerButton.style.marginTop = '1%';

		containerMsg.innerHTML = `<p class="msg-sem-quiz">Olá, <span class="perfil-title-yellow">${nomeUsuario}!</span> Para ter acesso ao perfil, você precisa realizar o <a href="quiz.html" class="quiz-final-link"><span class="perfil-title-yellow">quiz!</span></p></a>`;
	} else {
		containerMsg.style.display = 'none';
		exibirDadosUsuario();
	}


	botao_sair.addEventListener('click', () => {
		sessionStorage.clear();
		window.location.href = 'login.html';
	});
});

function exibirDadosUsuario() {
	obterDadosGrafico(sessionStorage.ID_USUARIO);
}

function obterDadosGrafico(idUsuario) {
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

	function trocaImagemPerfil(id) {
		const divImgPerfil = document.getElementById('img-perfil');
		if (id == 1) divImgPerfil.src = 'img/icons/Luffy-icon.jpg';
		else if (id == 2) divImgPerfil.src = 'img/icons/Zoro-icon.png';
		else if (id == 3) divImgPerfil.src = 'img/icons/Nami-icon.jpg';
		else if (id == 4) divImgPerfil.src = 'img/icons/Sanji-icon.jpg';
		else if (id == 5) divImgPerfil.src = 'img/icons/Robin-icon.jpg';
		else if (id == 6) divImgPerfil.src = 'img/icons/Chopper-icon.jpg';
		else if (id == 7) divImgPerfil.src = 'img/icons/Jinbe-icon.jpg';
		else if (id == 8) divImgPerfil.src = 'img/icons/Usopp-icon.jpg';
		else divImgPerfil.src = 'img/icons/Brook-icon.jpg';
	}

	const idPersonagem = sessionStorage.ID_PERSONAGEM;
	trocaImagemPerfil(idPersonagem);

	const divNomePersonagem = document.getElementById('nome-personagem-perfil');
	const divNomePersonagemDashboard = document.getElementById('kpiNome');
	const divDescricaoPersonagem = document.getElementById('perfil-descricaoPersonagem');
	const divRecompensaPersonagem = document.getElementById('perfil-recompensaPersonagem');
	const divFuncaoPersonagem = document.getElementById('perfil-funcaoPersonagem');
	const kpiTempoDeConclusao = document.getElementById('kpiTempoDeConclusao');
	const kpiMediaTempo = document.getElementById('kpiMediaTempo');
	const kpiPersonagemMaisEscolhido = document.getElementById('kpiPersonagemMaisEscolhido');

	fetch(`/personagem/nome/${idPersonagem}`, { cache: 'no-store' })
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

	fetch(`/personagem/descricao/${idPersonagem}`, { cache: 'no-store' })
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

	fetch(`/personagem/funcao/${idPersonagem}`, { cache: 'no-store' })
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

	fetch(`/personagem/recompensa/${idPersonagem}`, { cache: 'no-store' })
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

	fetch(`/kpi/tempoDeConclusao/${idUsuario}`, { cache: 'no-store' })
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
