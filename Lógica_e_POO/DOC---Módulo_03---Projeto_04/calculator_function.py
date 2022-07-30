### Definição da função Calculadora(número UM de operação, número DOIS de operação, número da OPÇÃO de operação básica)
def Calculadora(n1, n2, op):
    
    ## Opções de operação básicas definidas:
    # 1. Soma
    # 2. Subtração
    # 3. Multiplicação
    # 4. Divisão
    
    if (op==1):
        soma = n1 + n2
        return soma
    
    elif(op==2):
        subtracao = n1 - n2
        return subtracao

    elif(op==3):
        multiplicacao = n1 * n2
        return multiplicacao
        
    elif(op==4):
        # EVITANDO executar a indeterminação no denominador (denominador = 0)
        if (n2!=0):
            divisao = n1 / n2
            return divisao
        
        else:
            return "Cálculo indeterminado!"
        
    else:
        return 0