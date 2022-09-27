#criando o banco de dados 'infocursos'
create database infocursos;

#fazendo uso do banco de dados 'infocursos'
use infocursos;

#criando a tabela 'programacao_cursos'
create table programacao_cursos(
ID int not null auto_increment,
NOME varchar(50) not null,
PRECO decimal(10,2),
PRECO_DESCONTO decimal(10,2),

primary key(ID)
);

#trigger para o disparo de atualização automática nos preços descontados dos cursos de programação
create trigger tr_preco_desconto_programacao_cursos
before insert on programacao_cursos
for each row
set new.PRECO_DESCONTO = (new.PRECO * 0.8);