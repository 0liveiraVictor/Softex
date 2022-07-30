print("--------------------------------CALCULADORA-------------------------------- \n")

### Definição da função Calculadora (número UM de operação, número DOIS de operação, número da OPÇÃO de operação básica)
def Calculadora (n1, n2, op):
    
    ## Opções de operação básicas definidas:
    # 1. Soma
    # 2. Subtração
    # 3. Multiplicação
    # 4. Divisão
    
    if (op == 1):
        
        soma = n1 + n2
        return soma
    
    elif (op == 2):
        
        subtracao = n1 - n2
        return subtracao

    elif (op == 3):
        
        multiplicacao = n1 * n2
        return multiplicacao
        
    elif (op == 4):
        
        # EVITANDO executar a indeterminação no denominador (denominador = 0)
        if (n2 != 0):
            
            divisao = n1 / n2
            return divisao
        
        else:
            
            return "CÁLCULO INDERTEMINADO (NÃO é possível dividir por 0!)."
        
    else:
        
        return 0 
    
print("Opções de operações básicas: \n\n1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão \n0: Sair \n")
opcao = int(input("Digite sua opção (1, 2, 3, 4 ou 0): "))

while (opcao != 0):
    
    if (opcao > 4) or (opcao < 0):
        
        print("\nEssa opção NÃO EXISTE! VERIFIQUE a opção digitada e TENTE NOVAMENTE.")
        print("\n---------------------------------------------------------------------------")
        print("\nOpções de operações básicas: \n\n1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão \n0: Sair\n")    
        opcao = int(input("Digite uma OPÇÃO VÁLIDA entre 1, 2, 3, 4 ou 0: "))

    else:
        
        if (opcao == 1):
            
            num1 = float(input("\nDigite o PRIMEIRO número: "))
            num2 = float(input("Digite o SEGUNDO número: "))
            soma = Calculadora (num1, num2, opcao)
            print("\nO resultado da SOMA dos números é: ", soma)

        elif (opcao == 2):
            
            num1 = float(input("\nDigite o PRIMEIRO número: "))
            num2 = float(input("Digite o SEGUNDO número: "))
            subt = Calculadora (num1, num2, opcao)
            print("\nO resultado da SUBTRAÇÃO dos números é: ", subt)
        
        elif (opcao == 3):
            
            num1 = float(input("\nDigite o PRIMEIRO número: "))
            num2 = float(input("Digite o SEGUNDO número: "))
            mult = Calculadora (num1, num2, opcao)
            print("\nO resultado da MULTIPLICAÇÃO dos números é:", mult)
        
        elif (opcao == 4):
            
            num1 = float(input("\nDigite o PRIMEIRO número: "))
            num2 = float(input("Digite o SEGUNDO número: "))
            divi = Calculadora (num1, num2, opcao)
            print("\nO resultado da DIVISÃO dos números é:", divi)
            
        print("\n---------------------------------------------------------------------------")      
        
        print("\nDESEJA MAIS ALGUMA OPERAÇÃO? \n\nOpções de operações básicas: \n\n1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão \n")    
        print("Caso deseje SAIR, digite 0.")
        opcao = int(input("\nDigite sua opção: "))

print("\n           ---------------> OPERAÇÃO FINALIZADA <---------------")
print("\n---------------------------------------------------------------------------")