create database onepiecepedia;
use onepiecepedia;

create table usuario (
	idUsuario int primary key auto_increment not null,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null
);

create table quiz (
	idQuiz int primary key auto_increment not null,
    dataHoraInicio datetime default current_timestamp,
    dataHoraFinal datetime default current_timestamp
);

create table personagem (
	idPersonagem int not null,
    idUsuario int not null,
    idQuiz int not null,
	nome varchar(45) not null,
    funcao varchar(45) not null,
    recompensa bigint not null,
    descricao varchar(200) not null,
    
    primary key (idPersonagem, idUsuario, idQuiz),
    foreign key (idUsuario) references usuario(idUsuario),
    foreign key (idQuiz) references quiz(idQuiz)
);

select * from usuario;