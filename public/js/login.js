const botao_entrar = document.getElementById('login-button');
const divMsgErro = document.getElementById('msgErro');

const exibeErro = (msg) => {
	divMsgErro.style.display = 'flex';
	divMsgErro.innerHTML = msg;
};

botao_entrar.addEventListener('click', () => {
	let emailVar = document.getElementById('id-login-input-email').value;
	let senhaVar = document.getElementById('id-login-input-password').value;

	if (emailVar == '' || senhaVar == '') {
		exibeErro('Todos os campos devem ser preenchidos!');
		return false;
	} else {
		setTimeout(() => {
			divMsgErro.style.display = 'none';
		}, 2000);
	}

	console.log('LOGIN: ', emailVar);
	console.log('SENHA: ', senhaVar);

	fetch('/usuarios/autenticar', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			emailServer: emailVar,
			senhaServer: senhaVar
		}),
	})
		.then(function (resposta) {
			if (resposta.ok) {
				console.log(resposta);

				resposta.json().then((json) => {
					console.log(json);
					console.log(JSON.stringify(json));

					sessionStorage.EMAIL_USUARIO = json.email;
					sessionStorage.NOME_USUARIO = json.nome;
					sessionStorage.ID_USUARIO = json.idUsuario;

					setTimeout(() => {
						window.location = 'index.html';
					}, 1000);
				});
			} else {
				exibeErro('Login e/ou senha inválidos!')
				console.log('Houve um erro ao tentar realizar o login!');
				resposta.text().then((texto) => {
					console.error(texto);
				});
			}
		})
		.catch((erro) => {
			console.log(erro);
		});

	return false;
});
