#fazendo uso do banco de dados 'escola'
use escola;

#consulta com 'inner join'
select MATRICULA, NOME, ANO_SERIE
from turma as T inner join aluno as A
on T.COD_TURMA = A.TURMA

#consulta com 'left join'
select MATRICULA, NOME, ANO_SERIE
from turma as T left outer join aluno as A
on T.COD_TURMA = A.TURMA

#consulta com 'right join'
select MATRICULA, NOME, ANO_SERIE
from turma as T right outer join aluno as A
on T.COD_TURMA = A.TURMA

#consulta com a emulação do 'full join'
select MATRICULA, NOME, ANO_SERIE
from turma as T left outer join aluno as A
on T.COD_TURMA = A.TURMA
union
select MATRICULA, NOME, ANO_SERIE
from turma as T right outer join aluno as A
on T.COD_TURMA = A.TURMA