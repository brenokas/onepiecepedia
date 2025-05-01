function validarSessao() {
	var email = sessionStorage.EMAIL_USUARIO;
	var nome = sessionStorage.NOME_USUARIO;

	if (email == null && nome == null) {
		window.location = '../login.html';
	}
}
