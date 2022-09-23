#fazendo uso do banco de dados 'biblioteca'
use biblioteca

#incluindo a coluna 'DATA_NASCIMENTO' na tabela 'aluno'
alter table aluno add DATA_NASCIMENTO varchar(10) not null default '00/00/0000';

#alterando a coluna 'TELEFONE' para 'CONTATO' (tabela 'aluno')
alter table aluno change column TELEFONE CONTATO varchar(15) not null;

#incluindo o campo 'ISBN' na tabela 'livro'
alter table livro add ISBN int(13);

#remova o campo 'ISBN' da tabela 'livro'
alter table livro drop column ISBN;