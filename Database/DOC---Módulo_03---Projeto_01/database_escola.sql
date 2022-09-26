#criando o banco de dados 'escola'
create database escola;

#fazendo uso do banco de dados 'escola'
use escola;

#criando a tabela 'turma'
create table turma(
COD_TURMA varchar(2),
ANO_SERIE varchar(30),

primary key(COD_TURMA)
);

#criando a tabela 'aluno'
create table aluno(
MATRICULA int(4),
NOME varchar(35),
TURMA varchar(2),

primary key(MATRICULA),
constraint fk_aluno_turma foreign key(TURMA) references turma(COD_TURMA)
);

#inserindo dados na tabela 'turma'
insert into turma(COD_TURMA, ANO_SERIE) values ('5F', '5ª Série do Ensino Fundamental');
insert into turma(COD_TURMA, ANO_SERIE) values ('6F', '6ª Série do Ensino Fundamental');
insert into turma(COD_TURMA, ANO_SERIE) values ('7F', '7ª Série do Ensino Fundamental');
insert into turma(COD_TURMA, ANO_SERIE) values ('8F', '8ª Série do Ensino Fundamental');
insert into turma(COD_TURMA, ANO_SERIE) values ('1M', '1º Ano do Ensino Médio');
insert into turma(COD_TURMA, ANO_SERIE) values ('2M', '2º Ano do Ensino Médio');
insert into turma(COD_TURMA, ANO_SERIE) values ('3M', '3º Ano do Ensino Médio');

#inserindo dados na tabela 'aluno'
insert into aluno(MATRICULA, NOME, TURMA) values (1001, 'Ana Carla', '2M');
insert into aluno(MATRICULA, NOME, TURMA) values (1002, 'Beatriz Gomes', '1M');
insert into aluno(MATRICULA, NOME, TURMA) values (1003, 'Carlos Silva', '2M');
insert into aluno(MATRICULA, NOME, TURMA) values (1004, 'Ciro Silva', '2M');
insert into aluno(MATRICULA, NOME) values (1005, 'Daniel Pires');
insert into aluno(MATRICULA, NOME) values (1006, 'Erlane Gabrielle');
insert into aluno(MATRICULA, NOME) values (1007, 'Fábio Prato');
insert into aluno(MATRICULA, NOME) values (1008, 'Gabriela Bruno');
insert into aluno(MATRICULA, NOME) values (1009, 'Hélio Yoriaz');
#--------------------------------------------------------------------------------------------------------------------------------------------
insert into aluno(MATRICULA, NOME, TURMA) values (2001, 'Igor Santos', '1M');
insert into aluno(MATRICULA, NOME) values (2002, 'João Pedro');
insert into aluno(MATRICULA, NOME, TURMA) values (2003, 'Amanda França', '2M');
insert into aluno(MATRICULA, NOME, TURMA) values (2004, 'Luna Oliveira', '1M');
insert into aluno(MATRICULA, NOME, TURMA) values (2005, 'Miguel Mota', '2M');
insert into aluno(MATRICULA, NOME, TURMA) values (2006, 'Cíntia Tereza', '2M');
insert into aluno(MATRICULA, NOME) values (2007, 'Wladia Santos');
insert into aluno(MATRICULA, NOME) values (2008, 'Diogo Murilo');
insert into aluno(MATRICULA, NOME) values (2009, 'Pablo Marçal');
#--------------------------------------------------------------------------------------------------------------------------------------------
insert into aluno(MATRICULA, NOME, TURMA) values (3001, 'Marina Moschen', '3M');
insert into aluno(MATRICULA, NOME, TURMA) values (3002, 'Augusto Otávio', '2M');
insert into aluno(MATRICULA, NOME, TURMA) values (3003, 'Francisca Renash', '1M');
insert into aluno(MATRICULA, NOME) values (3004, 'Breno Dantas');
insert into aluno(MATRICULA, NOME, TURMA) values (3005, 'Victor Oliveira', '3M');
insert into aluno(MATRICULA, NOME, TURMA) values (3006, 'Hugo Nagas', '3M');
insert into aluno(MATRICULA, NOME, TURMA) values (3007, 'Thiago Alexandre', '3M');
insert into aluno(MATRICULA, NOME, TURMA) values (3008, 'Fernanda Mathias', '1M');
insert into aluno(MATRICULA, NOME, TURMA) values (3009, 'Kerline Pietra', '3M');