document.addEventListener('DOMContentLoaded', () => {
	botao_sair = document.getElementById('botao-sair');
	botao_menu = document.getElementById('botao-menu');

	botao_sair.addEventListener('click', () => {
    sessionStorage.clear();
		window.location.href = 'login.html';
	});

	botao_menu.addEventListener('click', () => {
		window.location.href = 'index.html';
	});
});
