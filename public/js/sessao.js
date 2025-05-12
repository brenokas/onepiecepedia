document.addEventListener('DOMContentLoaded', () => {
	window.onload = validarSessao();
	function validarSessao() {
		let email = sessionStorage.EMAIL_USUARIO;
		let nomeDoUsuario = sessionStorage.NOME_USUARIO;

		let divNome = document.getElementById('perfil-user-name');

		if (email == null && nomeDoUsuario == null) {
			window.location = '../login.html';
		} else {
			divNome.innerHTML = `${nomeDoUsuario}!`;
		}
	}
});
