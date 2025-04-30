const botao_registrar = document.getElementById('id-register-button-confirm');
const divMsgErro = document.getElementById('msgErro');

//cadastrando
botao_registrar.addEventListener('click', () => {
	let nome = document.getElementById('id-register-input-name').value;
	let email = document.getElementById('id-register-input-email').value;
	let senha = document.getElementById('id-register-input-password').value;
	let confirmSenha = document.getElementById('id-register-input-confirm-password').value;

	const exibeErro = (msg) => {
		divMsgErro.style.display = 'flex';
		divMsgErro.innerHTML = msg;
	};

	const exibeConfirmacao = (msg) => {
		divMsgErro.style.display = 'flex';
		divMsgErro.style.color = '#f8de3c';
		divMsgErro.innerHTML = msg;
	};

	// constante para a validação da senha
	const validacaoSenha = /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha) && /[^a-zA-Z0-9]/.test(senha);

	// verificando se as senhas dos campos são igual
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
		exibeConfirmacao('Cadastro efetuado com sucesso!<br>Redirecionando...');
		setTimeout(() => {
			divMsgErro.style.display = 'none';
			window.location.href = 'login.html';
		}, 4000);
	}
});
