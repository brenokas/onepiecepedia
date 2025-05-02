function validarSessao() {
	let email = sessionStorage.EMAIL_USUARIO;
	let nome = sessionStorage.NOME_USUARIO;

	let nomeUsuario = document.getElementById('perfil-user-name');

	if (email == null && nome == null) {
		window.location = '../login.html';
	} else {
		nomeUsuario.innerHTML = `${nome}!`;
	}
}
