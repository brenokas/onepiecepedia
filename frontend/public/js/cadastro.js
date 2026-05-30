const botao_registrar = document.getElementById('id-register-button-confirm');
const divMsgErro = document.getElementById('msgErro');

const exibeErro = (msg) => {
	divMsgErro.style.display = 'flex';
	divMsgErro.innerHTML = msg;
};

const exibeConfirmacao = (msg) => {
	divMsgErro.style.display = 'flex';
	divMsgErro.style.color = '#f8de3c';
	divMsgErro.innerHTML = msg;
};

//cadastrando
botao_registrar.addEventListener('click', () => {

	let nome = document.getElementById('id-register-input-name').value;
	let email = document.getElementById('id-register-input-email').value;
	let senha = document.getElementById('id-register-input-password').value;
	let confirmSenha = document.getElementById('id-register-input-confirm-password').value;

	const validacaoSenha = /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha) && /[^a-zA-Z0-9]/.test(senha);
	const senhasIguais = senha === confirmSenha;

	if (nome == '' || email == '' || senha == '' || confirmSenha == '') {
		exibeErro('Todos os campos devem ser preenchidos!');
		return false;
	} else if (nome.length < 3) {
		exibeErro('O nome deve ter pelo menos 3 caracteres!');
		return false;
	} else if (!email.includes('@') || !email.includes('.com')) {
		exibeErro('Email inválido!');
		return false;
	} else if (senha.length < 5) {
		exibeErro('Senha curta!<br> Pelo menos 5 caracteres!');
		return false;
	} else if (!validacaoSenha) {
		exibeErro('Senha fraca!<br> Insira pelo menos: 1 letra, 1 número e 1 caractere especial.');
		return false;
	} else if (!senhasIguais) {
		exibeErro('As senhas devem ser iguais!');
		return false;
	} else {
		setTimeout(() => {
			divMsgErro.style.display = 'none';
		}, 4000);
	}

	fetch('/usuarios/cadastrar', {
		method: 'Post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nomeServer: nome,
			emailServer: email,
			senhaServer: senha,
		}),
	})
		.then(function (resposta) {
			console.log('resposta: ', resposta);

			if (resposta.ok) {
				exibeConfirmacao('Cadastro realizado com sucesso! Redirecionando para o login...');
				setTimeout(() => {
					window.location.href = 'login.html';
				}, '2000');
			} else {
				throw 'Houve um erro ao tentar realizar o cadastro!';
			}
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});
});
