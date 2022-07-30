'''Antes da leitura do arquivo 'notas_alunos.csv', foi importante a criação desse arquivo. Nesse caso, foram
utilizados o módulo csv e as funções writer() e whiterow() para escrever as linhas desse novo ficheiro. Sendo
assim, temos passo a passo:'''

import csv

#Importando o módulo pandas para manipulação dos dados do arquivo .csv
import pandas as pd

#Criando notas_alunos.csv e escrevendo os dados no arquivo (arquivo adicionado no diretório: /home/victoroliveira)
with open('./notas_alunos.csv', 'w') as notasAlunos:
    
    csv.writer(notasAlunos, delimiter = ',').writerow(['aluno', 'nota_1', 'nota_2', 'faltas'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Daniel Pires', '9', '10', '7'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Augusto Macedo', '1', '1', '3'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Mariana Gusmão', '3', '9', '3'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Alberes Nascimento', '3', '3', '1'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Cíntia Silva', '4', '6', '2'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Paula Santos', '10', '7', '1'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Orlando Moura', '9', '5', '5'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Cátia Brito', '7', '8', '4'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Jefferson Matias', '5', '7', '9'])
    csv.writer(notasAlunos, delimiter = ',').writerow(['Pedro Filho', '10', '10', '0'])
    
#Leitura do arquivo notas_alunos.csv
ntAlunos = pd.read_csv('./notas_alunos.csv')

#Criando a coluna 'media' no DataFrame 'ntAlunos', com a média das duas notas de cada aluno
ntAlunos['media'] = (ntAlunos['nota_1'] + ntAlunos['nota_2'])/2

'''Criando a coluna 'situacao' no DataFrame ntAlunos', com as condições (mediante uso de indexação booleana) para APROVAÇÃO OU 
REPROVAÇÃO de cada aluno'''
ntAlunos.loc[(ntAlunos['faltas'] <= 5) & (ntAlunos['media'] >= 7), 'situacao'] = 'APROVADO'
ntAlunos.loc[(ntAlunos['faltas'] > 5) | (ntAlunos['media'] < 7), 'situacao'] = 'REPROVADO'

print("---------------------------------------DADOS GERAIS SOBRE AS NOTAS-------------------------------------")

print("\nO maior número de faltas de um aluno foi de: ", ntAlunos['faltas'].max())
print("A média geral das médias de notas obtidas pelos alunos foi de: ", ntAlunos['media'].mean())
print("A maior média obtida por um aluno foi de: ", ntAlunos['media'].max())
print("\n-----------------------------------------------------------------------------------------------------")

#Salvando os dados em um novo arquivo (alunos_situacao.csv)
ntAlunos.to_csv('./alunos_situacao.csv')