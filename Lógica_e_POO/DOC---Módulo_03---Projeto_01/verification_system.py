print("----------------------------------DADOS DO ALUNO----------------------------------\n")
nome = input("Digite o NOME COMPLETO do aluno: ")
nota1 = float(input("Digite a PRIMEIRA NOTA obtida pelo aluno (entre 0 e 10): "))
nota2 = float(input("Digite a SEGUNDA NOTA obtida pelo aluno (entre 0 e 10): "))
faltas = int(input("Digite a QUANTIDADE DE FALTAS obtida pelo aluno: "))

media = (nota1 + nota2)/2

if(faltas <= 3):
    if(media >= 7):  
        print("\n\n --->  O aluno {0} foi APROVADO!  <---".format(nome))
    else:
        print("\n\n --->  O aluno {0} foi REPROVADO!  <---".format(nome))
else:
    print("\n\n --->  O aluno {0} foi REPROVADO!  <---".format(nome))
    
print("\n-----------------------------------------------------------------------------------")