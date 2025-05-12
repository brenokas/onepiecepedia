document.addEventListener('DOMContentLoaded', () => {
	botao_sair = document.getElementById('botao-sair');

	botao_sair.addEventListener('click', () => {
    sessionStorage.clear();
		window.location.href = 'login.html';
	});

});
