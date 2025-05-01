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

button_iniciar.addEventListener('click', () => {
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

const responder = (indiceOpcao) => {
	const personagem = arrayPerguntas[indicePergunta].respostas[indiceOpcao].personagem;
	pontuacao[personagem]++;

	indicePergunta++;

	if (indicePergunta < arrayPerguntas.length) {
		mostrarPergunta();
	} else {
		resultado();
	}
};

const resultado = () => {
	pergunta_quiz.innerHTML = '';

	let personagemEscolhido = '';
	let personagemPontuacao = 0;

	for (let p in pontuacao) {
		if (pontuacao[p] > personagemPontuacao) {
			personagemPontuacao = pontuacao[p];
			personagemEscolhido = p;
		}
	}

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
    <img src="../img/resultado/${personagemEscolhido}-resultado.gif" class="quiz-page-img-resultado" id="img-resultado">
    <p class="quiz-page-text-desc-resultado">Confira a descrição do personagem e dados sobre o quiz no seu <span class="quiz-page-txt-yellow">perfil</span>!</p>
    </div>
    
  `;

	const img_resultado = document.getElementById('img-resultado');
	switch (personagemEscolhido) {
		case 'Sanji', 'Jinbe', 'Usopp':
			img_resultado.style.width = '50%';
			break;
			
		default:
			break;
	}
};
