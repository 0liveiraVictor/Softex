#criando o banco de dados 'loja'
create database loja;

#fazendo uso do banco de dados 'loja'
use loja;

#criando a tabela 'compra'
create table compra(
ID int auto_increment,
PRODUTO varchar(50),
QUANTIDADE int(3),
DATA_OPER date,

primary key(ID)
);

#inserindo dados na tabela 'compra'
insert into compra(ID, PRODUTO, QUANTIDADE, DATA_OPER) values(1, 'Creme Dental (uni.)', 10, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Sabonete Floral (uni.)', 5, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Shampoo Seda (uni.)', 1, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Condicionador Nutrice (uni.)', 1, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Feijão Verde (uni.)', 3, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Arroz Emoções (uni.)', 5, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Leite Itambé (uni.)', 6, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Ovos (12 uni.)', 1, "2022-09-27");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Café Melita (uni.)', 8, "2022-09-28");
insert into compra(PRODUTO, QUANTIDADE, DATA_OPER) values('Desodorante Rexona (uni.)', 2, "2022-09-28");

#procedimento de levantamento diário da quantidade de produtos comprados
delimiter $$
create procedure pr_levantamento_diario_quantidade(
in data_compra date,
out qtd_total int
)
begin
    select sum(C.QUANTIDADE) into qtd_total
    from compra as C
    where C.DATA_OPER = data_compra;
end;
$$
