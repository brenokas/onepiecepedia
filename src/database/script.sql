create database onepiecepedia;
use onepiecepedia;

create table usuario (
	idUsuario int primary key auto_increment not null,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null
);

create table personagem (
	idPersonagem int primary key not null,
	nome varchar(45) not null,
    funcao varchar(45) not null,
    recompensa bigint not null,
    descricao varchar(1000) not null
);

create table quiz (
	idQuiz int primary key not null auto_increment,
    dataHoraInicio datetime,
    dataHoraFinal datetime,
    fkUsuario int,
    fkPersonagem int,
    foreign key (fkUsuario) references usuario(idUsuario),
    foreign key (fkPersonagem) references personagem(idPersonagem)
);


insert into personagem values
	(1, 'Monkey D. Luffy', 'Capitão', 3000000000, 
    'Monkey D. Luffy, mais conhecido como "Luffy Chapéu de Palha" é o fundador, capitão e 
    combatente mais forte dos Piratas do Chapéu de Palha. Ele busca destemidamente 
    o lendário tesouro One Piece se tornar o novo Rei dos Piratas, e realizar um 
    sonho ainda não revelado. Ele acredita que ser o Rei dos Piratas significa ter a maior 
    liberdade do mundo. Luffy é destemido, determinado e muito carismático.'),
    
	(2, 'Roronoa Zoro', 'Imediato', 1111000000,
	'Roronoa Zoro, também conhecido como "Caçador de Piratas" é o combatente dos Piratas do Chapéu de Palha 
    e um ex-caçador de recompensas. Ele foi o primeiro membro a juntar-se à tripulação. Sua fama como mestre espadachim 
    e sua grande força, juntamente com as ações de seu capitão, às vezes levaram os outros a acreditar que ele era o 
    verdadeiro capitão da tripulação antes deste obter sua primeira recompensa. Zoro é leal, sério e desorientado.'),
    
    (3, 'Nami', 'Navegadora', 366000000, 
    'Nami, a "Gata Ladra" é a navegadora dos Piratas do Chapéu de Palha e uma dos Oficiais Seniores da Grande Frota 
    do Chapéu de Palha. Ela é o terceiro membro da tripulação e a segunda a entrar, fazendo isso durante o Arco Orange Town. 
    Ela era anteriormente um membro dos Piratas do Arlong e inicialmente se juntou aos Chapéus de Palha para poder roubá-los e comprar 
    de volta a sua aldeia de Arlong. No entanto, ela se juntou legitimamente aos Chapéus de Palha depois que eles se rebelaram e derrotaram Arlong. 
    Seu sonho é fazer um mapa de todo o mundo. Nami é inteligente, ambiciosa e corajosa.'),
    
    (4, 'Sanji', 'Cozinheiro', 1032000000,
    'Sanji "Perna Preta", nascido como Vinsmoke Sanji, é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo 
    chefe de cozinha do Baratie. Ele é oficialmente o quinto membro da tripulação e o quarto a se juntar, fazendo isso no final do Arco Baratie. 
    Uma vez que ele nasceu no North Blue, ele é o primeiro Chapéu de Palha a não se originar do East Blue. Sanji é cavalheiro, orgulhoso e habilidoso.'),
    
    (5, 'Nico Robin', 'Arqueóloga', 930000000,
    'Nico Robin, também conhecida como "Criança Demônio" e "Luz da Revolução", é a arqueóloga dos Piratas do Chapéu de Palha.
    Ela é a única sobrevivente da ilha destruída de Ohara. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade 
    de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial. Ela é a sétima integrante 
    da tripulação, a sexta a se unir e, como Nami, é a segunda a reentrar, chegando perto do final do Arco Enies Lobby. Robin também 
    é o primeiro membro a ter sido um antagonista. Ela comeu a Hana Hana no Mi. Robin é calma, misteriosa e inteligente.'),
    
    (6, 'Chopper', 'Médico', 1000,
    'Tony Tony Chopper é uma rena. Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, 
    adquiriu a habilidade de se transformar e raciocinar como os humanos. Ele é o sexto membro e um dos poucos membros da tripulação que nasceu 
    na Grand Line, numa ilha chamada Drum. Mesmo sendo considerado "Mascote" pela marinha, ele foi nomeado um dos comandantes do Luffy, sendo assim seguindo
    a lógica da sua recompensa o 9° Comandante. Chopper é Inocente, inteligente e tímido.'),
    
    (7, 'Jinbe', 'Timoneiro', 1100000000,
    'Jinbe "Cavaleiro do Mar" é o timoneiro dos Piratas do Chapéu de Palha. Ele é o décimo membro da tripulação e o nono a se juntar, 
    fazendo isso durante o Arco País de Wano. Jinbe é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. 
    Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe. 
    Jinbe é sábio, honrado e forte.'),
    
    (8, 'Usopp', 'Atirador', 500000000,
    '"God" Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar, fazendo isso no final 
    do Arco Vila Syrup. Embora ele tenha deixado a tripulação durante o Arco Water 7, ele se juntou novamente ao final do Arco Pós-Enies Lobby. 
    Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação. Apesar de sua 
    covardia normal, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.
    Usopp é criativo, medroso e sonhador.'),
    
    (9, 'Brook', 'Músico', 383000000,
    'Brook é o Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem 
    no Triângulo Florian. Ele é um usuário de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes. Ele é o nono 
    membro do Bando do Chapéu de Palha, e o oitavo a se juntar à tripulação de Luffy. Ele é também um dos dois Espadachins a bordo de seu atual navio, o outro 
    sendo Zoro. Ele preenche o cargo do tão esperado músico que Luffy queria para sua tripulação desde que sua jornada começou. Brook é engraçado, gentil e valente.');



update personagem set descricao = 'Monkey D. Luffy, mais conhecido como <span class="perfil-title-yellow">"Luffy Chapéu de Palha"</span> é o fundador, capitão e 
    combatente mais forte dos Piratas do Chapéu de Palha. Ele busca destemidamente 
    o lendário tesouro One Piece se tornar o novo Rei dos Piratas, e realizar um 
    sonho ainda não revelado. Ele acredita que ser o Rei dos Piratas significa ter a maior 
    liberdade do mundo. Luffy é destemido, determinado e muito carismático.' where idPersonagem = 1;

    
select * from personagem;
select * from quiz;

drop table personagem;
drop table quiz;

select * from usuario;
select * from quiz;
