#criação do banco de dados 'biblioteca'
create database biblioteca;

#fazendo uso do banco de dados 'biblioteca'
use biblioteca;

#criando a tabela 'aluno'
create table aluno(
ID int not null auto_increment,
NOME varchar(25) not null,
MATRICULA int not null,
EMAIL varchar(30) not null,
ENDERECO varchar(30) not null,
TELEFONE varchar(15) not null,

primary key(ID)
);

#inserindo os dados na tabela 'aluno'
insert into aluno (NOME, MATRICULA, EMAIL, ENDERECO, TELEFONE) values ('João Carlos', 1234, 'Jcarlos@gmail.com', 'Rua 13 de maio', '(11)7825-4489');
insert into aluno (NOME, MATRICULA, EMAIL, ENDERECO, TELEFONE) values ('José Vitor', 2345, 'Jvitor@gmail.com', 'Rua da Saudade', '(11)7825-6589');
insert into aluno (NOME, MATRICULA, EMAIL, ENDERECO, TELEFONE) values ('Paulo André', 3456, 'Pandr@gmail.com', 'Rua do Sol', '(11)7825-4495');

#criando a tabela 'emprestimo'
create table emprestimo(
CODIGO int not null auto_increment,
DATA_HORA varchar(20) not null,
MATRIC_ALUNO int not null,
DATA_DEVOLUCAO varchar(12) not null,

primary key(CODIGO)
);

#inserindo os dados na tabela 'emprestimo'
insert into emprestimo (DATA_HORA, MATRIC_ALUNO, DATA_DEVOLUCAO) values ('12/03/2022 | 15:25', 1234, '15/03/2022');
insert into emprestimo (DATA_HORA, MATRIC_ALUNO, DATA_DEVOLUCAO) values ('15/03/2022 | 14:32', 3456, '18/03/2022');
insert into emprestimo (DATA_HORA, MATRIC_ALUNO, DATA_DEVOLUCAO) values ('20/03/2022 | 03:51', 2345, '23/03/2022');

#criando a tabela 'livro_emprestimo'
create table livro_emprestimo(
COD_LIVRO int not null,
COD_EMPRESTIMO int not null
);

#inserindo os dados na tabela 'livro_emprestimo'
insert into livro_emprestimo (COD_LIVRO, COD_EMPRESTIMO) values (03, 01);
insert into livro_emprestimo (COD_LIVRO, COD_EMPRESTIMO) values (01, 03);
insert into livro_emprestimo (COD_LIVRO, COD_EMPRESTIMO) values (02, 02);

#criando a tabela 'livro'
create table livro(
COD_LIVRO int not null auto_increment,
TITULO varchar(80) not null,
AUTOR varchar(45) not null,
COD_SESSAO int not null,

primary key(COD_LIVRO)
);

#inserindo os dados na tabela 'livro'
insert into livro (TITULO, AUTOR, COD_SESSAO) values ('Modelo Conceitual e Diagramas ER', 'Pressman, Roger S.', 03);
insert into livro (TITULO, AUTOR, COD_SESSAO) values ('Livro 2: Modelo Relacional e Álgebra Relacional', 'Heuser, Carlos Alberto', 01);
insert into livro (TITULO, AUTOR, COD_SESSAO) values ('Livro 3: Linguagem SQL', 'Beighley, Lynn', 02);

#criando a tabela 'sessao'
create table sessao(
CODIGO int not null auto_increment,
DESCRICAO varchar(10) not null,
LOCALIZACAO varchar(15) not null,

primary key(CODIGO)
);

#inserindo os dados na tabela 'sessao'
insert into sessao (DESCRICAO, LOCALIZACAO) values ('Sessao1', 'Partilheira1');
insert into sessao (DESCRICAO, LOCALIZACAO) values ('Sessao2', 'Partilheira2');
insert into sessao (DESCRICAO, LOCALIZACAO) values ('Sessao3', 'Partilheira3');