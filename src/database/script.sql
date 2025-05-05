create database onepiecepedia;
use onepiecepedia;

create table usuario (
	idUsuario int primary key auto_increment not null,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null
);

create table quiz (
	idQuiz int primary key not null,
    dataHoraInicio datetime,
    dataHoraFinal datetime,
    fkUsuario int not null,
    foreign key (fkUsuario) references usuario(idUsuario)
);

create table personagem (
	idPersonagem int not null,
    fkQuiz int not null,
	nome varchar(45) not null,
    funcao varchar(45) not null,
    recompensa bigint not null,
    descricao varchar(200) not null,
    
    primary key (idPersonagem, fkQuiz),
    foreign key (fkQuiz) references quiz(idQuiz)
);

drop table personagem;
drop table quiz;

select * from usuario;
select * from quiz;

select * from usuario u join quiz q on q.fkUsuario = u.idUsuario;