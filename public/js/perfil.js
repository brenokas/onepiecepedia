document.addEventListener('DOMContentLoaded', () => {
	let botao_sair = document.getElementById('botao-sair');
	let containerMsg = document.getElementById('container-msg');

	if (sessionStorage.ID_PERSONAGEM == undefined) {
		let container = document.getElementById('container-perfil');
		let containerDash = document.getElementById('container-dashboard');
		let containerButton = document.getElementById('button-container');
		let nomeUsuario = sessionStorage.NOME_USUARIO;

		container.style.display = 'none';
		containerDash.style.display = 'none';
		containerButton.style.marginTop = '1%';

		containerMsg.innerHTML = `<p class="msg-sem-quiz">Olá, <span class="perfil-title-yellow">${nomeUsuario}!</span> Para ter acesso ao perfil, você precisa realizar o <span class="perfil-title-yellow">quiz!</span></p>`;
	} else {
		containerMsg.style.display = 'none';
		exibirDadosUsuario();
	}


	botao_sair.addEventListener('click', () => {
		sessionStorage.clear();
		window.location.href = 'login.html';
	});
});


