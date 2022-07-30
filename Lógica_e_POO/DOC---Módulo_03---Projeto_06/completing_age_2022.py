print("--------------------------------IDADE EM 2022-------------------------------- \n")

nome = input("Digite seu nome completo: ")

#Variável condicionante para manter o lop 'while' em caso de anotação incorreta do ano de nascimento.
op = True

while (op == True):

    try:
    
        ano = int(input("Digite seu ano de nascimento (entre 1922 e 2021): "))

        if (ano >= 1922) and (ano <= 2021):
    
            idade = (2022 - ano)
    
            print("\nSr(a). ", nome)
            print("Você, em 2022, completou (ou completará) " + str(idade) + " anos de idade.")
            
            op = False
    
        else:
    
            while True:
    
                print("\nVocê digitou um ano INVÁLIDO (fora do limite definido!).")
                print("Por favor, TENTE NOVAMENTE!")
                print("-----------------------------------------------------------------------------")
                
                ano = int(input("\nDigite um ano de nascimento VÁLIDO entre 1922 e 2021): "))
    
                if (ano >= 1922) and (ano <= 2021):
            
                    idade = (2022 - ano)
    
                    print("\nSr(a). ", nome)
                    print("Você, em 2022, completou (ou completará) " + str(idade) + " anos de idade.")
                    
                    op = False
                    break
                
    except ValueError:
            
                print("\nERRO: Caracteres são INVÁLIDOS!")
                print("Por favor, verifique os limites numéricos de ano definido e TENTE NOVAMENTE.")
                print("-----------------------------------------------------------------------------")

print("-----------------------------------------------------------------------------")