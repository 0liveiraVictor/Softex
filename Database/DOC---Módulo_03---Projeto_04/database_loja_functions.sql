#fazendo uso do banco de dados 'loja'
use loja;

#criando a tabela 'cliente'
create table cliente(
ID int auto_increment,
NOME varchar(50),
DATA_REGISTRO date,

primary key(ID)
);

#inserindo dados na tabela 'cliente'
insert into cliente(ID, NOME, DATA_REGISTRO) values(1, 'Valdemar Costa', "2022-09-27");
insert into cliente(NOME, DATA_REGISTRO) values('Bianca Andrade', "2022-09-27");
insert into cliente(NOME, DATA_REGISTRO) values('Sérgio Jota', "2022-09-27");
insert into cliente(NOME, DATA_REGISTRO) values('Pedro Leal', "2022-09-28");
insert into cliente(NOME, DATA_REGISTRO) values('Carlos Bianco', "2022-09-28");
insert into cliente(NOME, DATA_REGISTRO) values('Priscila Knauf', "2022-09-30");
insert into cliente(NOME, DATA_REGISTRO) values('Jorge Barbara', "2022-09-30");
insert into cliente(NOME, DATA_REGISTRO) values('Gabriel Lucas', "2022-09-30");
insert into cliente(NOME, DATA_REGISTRO) values('Danilo Lins', "2022-09-30");

#utilização da função 'count' para somatização dos clientes registrado na loja em um único dia
select count(ID) as TOTAL_CLIENTES_DIARIO from cliente
where DATA_REGISTRO = "2022-09-30";