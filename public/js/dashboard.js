let proximaAtualizacao;

window.onload = exibirDadosUsuario();

function exibirDadosUsuario() {
	// var idPersonagem = JSON.parse(sessionStorage.ID_PERSONAGEM);
	obterDadosGrafico(sessionStorage.ID_PERSONAGEM);
}

function obterDadosGrafico(idUsuario) {
	if (proximaAtualizacao != undefined) {
		clearTimeout(proximaAtualizacao);
	}

	var divNomePersonagem = document.getElementById('nome-personagem-perfil');
	var divNomePersonagemDashboard = document.getElementById('kpiNome');
	var divDescricaoPersonagem = document.getElementById('perfil-descricaoPersonagem');
	var divRecompensaPersonagem = document.getElementById('perfil-recompensaPersonagem');
	var divFuncaoPersonagem = document.getElementById('perfil-funcaoPersonagem');
	var idPersonagemServer = sessionStorage.ID_PERSONAGEM;
	var divImgPerfil = document.getElementById('img-perfil');

	if (idPersonagemServer == 1) {
		divImgPerfil.src = 'img/icons/Luffy-icon.jpg';
	} else if (idPersonagemServer == 2) {
		divImgPerfil.src = 'img/icons/Zoro-icon.png';
	} else if (idPersonagemServer == 3) {
		divImgPerfil.src = 'img/icons/Nami-icon.jpg';
	} else if (idPersonagemServer == 4) {
		divImgPerfil.src = 'img/icons/Sanji-icon.jpg';
	} else if (idPersonagemServer == 5) {
		divImgPerfil.src = 'img/icons/Robin-icon.jpg';
	} else if (idPersonagemServer == 6) {
		divImgPerfil.src = 'img/icons/Chopper-icon.jpg';
	} else if (idPersonagemServer == 7) {
		divImgPerfil.src = 'img/icons/Jinbe-icon.jpg';
	} else if (idPersonagemServer == 8) {
		divImgPerfil.src = 'img/icons/Usopp-icon.jpg';
	} else {
		divImgPerfil.src = 'img/icons/Brook-icon.jpg';
	}

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

					var recompensa = resposta[0].recompensa;
					divRecompensaPersonagem.innerHTML = `${recompensa.toLocaleString('pt-BR', { minimumFractionDIgits: 2 })}`;
				});
			} else {
				console.error('Nenhum dado encontrado ou erro na API');
			}
		})
		.catch(function (error) {
			console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
		});
}
