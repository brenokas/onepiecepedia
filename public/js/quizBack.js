const arrayPerguntas = [
	{
		frase: 'Você prefere passar o dia...',
		respostas: [
			{ alternativa: 'Cozinhando', personagem: 'Sanji' },
			{ alternativa: 'Treinando ou meditando', personagem: 'Zoro' },
			{ alternativa: 'Organizando planos', personagem: 'Nami' },
			{ alternativa: 'Tocando música e contando piadas', personagem: 'Brook' },
		],
	},

	{
		frase: 'O que você mais valoriza em um amigo?',
		respostas: [
			{ alternativa: 'Lealdade', personagem: 'Jinbe' },
			{ alternativa: 'Coragem', personagem: 'Luffy' },
			{ alternativa: 'Inteligência', personagem: 'Robin' },
			{ alternativa: 'Senso de humor', personagem: 'Usopp' },
		],
	},

	{
		frase: 'Qual dessas comidas você escolheria?',
		respostas: [
			{ alternativa: 'Carne assada', personagem: 'Luffy' },
			{ alternativa: 'Frutos do mar refinados', personagem: 'Sanji' },
			{ alternativa: 'Algodão doce', personagem: 'Chopper' },
			{ alternativa: 'Chá com biscoitos', personagem: 'Brook' },
		],
	},

	{
		frase: 'Qual desses estilos te define mais?',
		respostas: [
			{ alternativa: 'Esperto e responsável', personagem: 'Nami' },
			{ alternativa: 'Curioso e sensível', personagem: 'Chopper' },
			{ alternativa: 'Elegante e romântico', personagem: 'Sanji' },
			{ alternativa: 'Selvagem e impulsivo', personagem: 'Luffy' },
		],
	},

	{
		frase: 'Você está em perigo, o que faz?',
		respostas: [
			{ alternativa: 'Luta sem pensar duas vezes', personagem: 'Zoro' },
			{ alternativa: 'Usa o cérebro e foge', personagem: 'Nami' },
			{ alternativa: 'Finge estar morto (de medo)', personagem: 'Usopp' },
			{ alternativa: 'Mantém a calma e ajuda os outros', personagem: 'Jinbe' },
		],
	},

	{
		frase: 'Com que tipo de humor você se identifica?',
		respostas: [
			{ alternativa: 'Bobeiras e piadas', personagem: 'Brook' },
			{ alternativa: 'Histórias absurdas e exageradas', personagem: 'Usopp' },
			{ alternativa: 'Humor seco e irônico', personagem: 'Robin' },
			{ alternativa: 'Situações aleatórias e doidas', personagem: 'Luffy' },
		],
	},

	{
		frase: 'Se você pudesse escolher uma habilidade, qual seria?',
		respostas: [
			{ alternativa: 'Invisibilidade', personagem: 'Sanji' },
			{ alternativa: 'Cura e medicina', personagem: 'Chopper' },
			{ alternativa: 'Comunicação com espíritos', personagem: 'Brook' },
			{ alternativa: 'Falar com peixes', personagem: 'Jinbe' },
		],
	},

	{
		frase: 'Como você age quando alguém é injustiçado?',
		respostas: [
			{ alternativa: 'Dá uma lição na pessoa', personagem: 'Zoro' },
			{ alternativa: 'Defende com calma e sabedoria', personagem: 'Jinbe' },
			{ alternativa: 'Planeja uma vingança cruel', personagem: 'Nami' },
			{ alternativa: 'Grita de raiva e cai pra porrada', personagem: 'Luffy' },
		],
	},

	{
		frase: 'O que você faria em uma ilha misteriosa?',
		respostas: [
			{ alternativa: 'Procura comida e diversão', personagem: 'Luffy' },
			{ alternativa: 'Iria para a biblioteca local', personagem: 'Robin' },
			{ alternativa: 'Ficaria nervoso e com medo', personagem: 'Usopp' },
			{ alternativa: 'Me perderia', personagem: 'Zoro' },
		],
	},

	{
		frase: 'Qual dessas frases mais combina com você?',
		respostas: [
			{ alternativa: '"Eu nunca deixo um companheiro para trás."', personagem: 'Zoro' },
			{ alternativa: '"A música é minha alma."', personagem: 'Brook' },
			{ alternativa: '"Conhecimento é poder."', personagem: 'Robin' },
			{ alternativa: '"Medo é parte da coragem."', personagem: 'Chopper' },
		],
	},
];

const pontuacao = {
	Luffy: 0,
	Zoro: 0,
	Nami: 0,
	Sanji: 0,
	Robin: 0,
	Chopper: 0,
	Jinbe: 0,
	Usopp: 0,
	Brook: 0,
};

let indicePergunta = 0;
button_iniciar = document.getElementById('quiz-button-start');
div_quiz = document.getElementById('quiz-main-container');
pergunta_quiz = document.getElementById('quiz-description');
titulo_quiz = document.getElementById('quiz-title');

const dataHoraMomento = () => {
	const date = new Date();
	const ano = date.getFullYear();
	const mes = String(date.getMonth() + 1).padStart(2, '0');
	const dia = String(date.getDate()).padStart(2, '0');
	const horas = String(date.getHours()).padStart(2, '0');
	const minutos = String(date.getMinutes()).padStart(2, '0');
	const segundos = String(date.getSeconds()).padStart(2, '0');

	const dataHoraFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
	return dataHoraFormatada;
};

let idUsuarioQuiz = sessionStorage.ID_USUARIO;

const iniciarQuiz = (dataHoraInicio, idUsuario) => {
	console.log('DATA DE INICIO: ', dataHoraInicio);

	fetch('/quiz/inicio', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			dataHoraInicioServer: dataHoraInicio,
			idUsuarioServer: idUsuario,
		}),
	})
		.then((resposta) => {
			if (resposta.ok) {
				console.log(resposta);

				resposta.json().then((json) => {
					console.log(json);
					console.log(JSON.stringify(json));

					sessionStorage.DATA_INICIO = json.dataHoraInicio;
					sessionStorage.ID_USUARIO_INICIO = json.idUsuario;
				});
			} else {
				console.log('Houve um erro ao captar a data e hora de inicio!');
				resposta.text().then((texto) => {
					console.error(texto);
				});
			}
		})
		.catch((erro) => {
			console.log(erro);
		});

	return false;
};

const finalizarQuiz = (dataHoraInicioFinal, dataHoraFinal, idUsuario, idPersonagem) => {
	console.log('DATA DE FINALIZACAO: ', dataHoraFinal);

	fetch('/quiz/final', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			dataHoraInicioFinalServer: dataHoraInicioFinal,
			dataHoraFinalServer: dataHoraFinal,
			idUsuarioServer: idUsuario,
			idPersonagemServer: idPersonagem,
		}),
	})
		.then((resposta) => {
			if (resposta.ok) {
				console.log(resposta);

				resposta.json().then((json) => {
					console.log(json);
					console.log(JSON.stringify(json));

					sessionStorage.DATA_INICIO_FINAL = json.dataHoraInicioFinal;
					sessionStorage.DATA_FINAL = json.dataHoraFinal;
					sessionStorage.ID_USUARIO_FINAL = json.idUsuario;
					sessionStorage.ID_PERSONAGEM = json.idPersonagem;
				});
			} else {
				console.log('Houve um erro ao captar a data e hora de finzalização!');
				resposta.text().then((texto) => {
					console.error(texto);
				});
			}
		})
		.catch((erro) => {
			console.log(erro);
		});
	resultado();

	return false;
};

button_iniciar.addEventListener('click', () => {
	iniciarQuiz(dataHoraMomento(), idUsuarioQuiz);
	button_iniciar.style.display = 'none';
	pergunta_quiz.style.marginTop = '0.5%';
	pergunta_quiz.style.marginBottom = '3%';
	titulo_quiz.innerHTML = '1ª pergunta';

	mostrarPergunta();
});

const mostrarPergunta = () => {
	const pergunta = arrayPerguntas[indicePergunta];
	titulo_quiz.innerHTML = `${indicePergunta + 1}ª pergunta`;

	pergunta_quiz.innerHTML = pergunta.frase;

	div_quiz.innerHTML = `
  <div class="perguntas-cima">
    <div class="pergunta" onclick="responder(0)">	
      ${pergunta.respostas[0].alternativa}
    </div>
    <div class="pergunta" onclick="responder(1)">
    ${pergunta.respostas[1].alternativa}
    </div>
  </div>

  <div class="perguntas-baixo">
    <div class="pergunta" onclick="responder(2)">
    ${pergunta.respostas[2].alternativa}
    </div>
    <div class="pergunta" onclick="responder(3)">
    ${pergunta.respostas[3].alternativa}
    </div>
  </div>
  `;
};

const verificarResultado = () => {
	let personagem = '';
	let pontPersonagem = 0;

	for (let p in pontuacao) {
		if (pontuacao[p] > pontPersonagem) {
			pontPersonagem = pontuacao[p];
			personagem = p;
		}
	}

	return personagem;
};

const idPersonagem = () => {
	let nomePersonagem = verificarResultado();

	if (nomePersonagem == 'Luffy') return 1;
	else if (nomePersonagem == 'Zoro') return 2;
	else if (nomePersonagem == 'Nami') return 3;
	else if (nomePersonagem == 'Sanji') return 4;
	else if (nomePersonagem == 'Robin') return 5;
	else if (nomePersonagem == 'Chopper') return 6;
	else if (nomePersonagem == 'Jinbe') return 7;
	else if (nomePersonagem == 'Usopp') return 8;
	else return 9;
};

const responder = (indiceOpcao) => {
	const personagem = arrayPerguntas[indicePergunta].respostas[indiceOpcao].personagem;
	pontuacao[personagem]++;

	indicePergunta++;

	if (indicePergunta < arrayPerguntas.length) {
		mostrarPergunta();
	} else {
		let dataHoraInicioFinal = sessionStorage.DATA_INICIO;
		let idPersonagemResultado = idPersonagem();
		finalizarQuiz(dataHoraInicioFinal, dataHoraMomento(), idUsuarioQuiz, idPersonagemResultado);
	}
};

const resultado = () => {
	pergunta_quiz.innerHTML = '';

	let personagemEscolhido = verificarResultado();

	mostrarResultado(personagemEscolhido);
};

const mostrarResultado = (personagemEscolhido) => {
	titulo_quiz.innerHTML = 'Resultado';
	if (pergunta_quiz) {
		pergunta_quiz.remove();
	}

	div_quiz.innerHTML = `
    <div class="quiz-page-resultado">
    <p>Seu personagem é: <span class="quiz-page-txt-yellow">${personagemEscolhido}</span></p>
    <img src="img/resultado/${personagemEscolhido}-resultado.gif" class="quiz-page-img-resultado" id="img-resultado">
    <p class="quiz-page-text-desc-resultado">Confira a descrição do personagem e dados sobre o quiz no seu <span class="quiz-page-txt-yellow">perfil</span>!</p>
    </div>
    
  `;

	const img_resultado = document.getElementById('img-resultado');
	const quiz_container = document.getElementById('quiz-container');

	switch (personagemEscolhido) {
		default:
			quiz_container.style.marginTop = '0';
			break;
	}

	if (personagemEscolhido == 'Luffy' || personagemEscolhido == 'Brook') img_resultado.style.width = '100%';
	else if (personagemEscolhido == 'Jinbe' || personagemEscolhido == 'Usopp') img_resultado.style.width = '90%';
	else if (personagemEscolhido == 'Sanji') img_resultado.style.width = '80%';
	else if (personagemEscolhido == 'Zoro' || personagemEscolhido == 'Robin') img_resultado.style.width = '70%';
	else if (personagemEscolhido == 'Nami') img_resultado.style.width = '60%';
	else img_resultado.style.width = '50%';
};
