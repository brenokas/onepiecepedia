document.addEventListener('DOMContentLoaded', () => {
	window.onload = validarSessao();

	function validarSessao() {
		let email = sessionStorage.EMAIL_USUARIO;
		let nomeDoUsuario = sessionStorage.NOME_USUARIO;

		if (email == null && nomeDoUsuario == null) {
			window.location = '../login.html';
		} else {
			const idUsuario = sessionStorage.ID_USUARIO;
			let idPersonagem = 0;

			// se o usuario esta logado, eu verifico se ele ja tem algum quiz feito na conta
			fetch(`/checagem/checagemQuiz/${idUsuario}`, { cache: 'no-store' })
				.then(function (response) {
					if (response.ok) {
						response.json().then(function (resposta) {
							console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
							const jaFezQuiz = resposta[0]['EXISTS(SELECT 1 FROM quiz WHERE fkUsuario = 1)'];

							if (jaFezQuiz == 1) {
								// se ele ja fez quiz, eu puxo os dados pra conta
								sessionStorage.setItem('entrouComQuiz', true);

								//fazer get para pegar o id do personagem que ele tirou no quiz e exibir;

								fetch(`/checagem/pegarIdPersonagem/${idUsuario}`, { cache: 'no-store' })
									.then(function (response) {
										if (response.ok) {
											response.json().then(function (resposta) {
												console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
												idPersonagem = resposta[0].fkPersonagem;

												sessionStorage.setItem('ID_PERSONAGEM', idPersonagem);

												if (idPersonagem != 0) {
												} else {
													console.error('Erro na obtenção do id do personagem');
												}
											});
										} else {
											console.error('Nenhum dado encontrado ou erro na API');
										}
									})
									.catch(function (error) {
										console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
									});
							} else {
								// se ele nunca fez quiz...
								sessionStorage.setItem('entrouComQuiz', false);
							}
						});
					} else {
						console.error('Nenhum dado encontrado ou erro na API');
					}
				})
				.catch(function (error) {
					console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
				});
		}
	}
});
