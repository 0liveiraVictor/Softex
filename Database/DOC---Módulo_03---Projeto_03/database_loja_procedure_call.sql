#fazendo uso do banco de dados 'loja'
use loja;

#chamada do procedimento 'pr_levantamento_diario_quantidade'
call pr_levantamento_diario_quantidade("2022-09-27", @qtd_total);
select @qtd_total as QUANTIDADE_DIARIA_TOTAL;