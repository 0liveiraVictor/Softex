#!/usr/bin/env python
# coding: utf-8

# In[ ]:


print("--------------------------------ELEIÇÕES 2022--------------------------------\n")

#Número dos votos iniciais dos candidatos X, Y, Z e brancos e nulos antes da votação.
candX = 0
candY = 0
candZ = 0
branco = 0
nulo = 0

#Variável condicionante para dar continuidade da operação eleitoral.
operacao = True

while (operacao == True):
    
    while True:
        
        try:
    
            voto = int(input("\nDigite o número do seu candidato: "))
            print("\nFIM!")
            print("\n-----------------------------------------------------------------------------")
    
            #Computando os votos brancos, nulos e dos candidatos X, Y e Z.
            if (voto == 889):
        
                candX = candX + 1       #(ou candX += 1)
                break
        
            elif (voto == 847):
        
                candY = candY + 1
                break
        
            elif (voto == 515):
        
                candZ = candZ + 1
                break
        
            elif (voto == 0):
        
                branco = branco + 1
                break
        
            else:
        
                nulo = nulo + 1
                break
            
        except ValueError:
            
            print("\nNúmero INVÁLIDO! Por favor, TENTE NOVAMENTE.")
            print("\n-----------------------------------------------------------------------------")
            
    while True:
        
        try:
    
            #Operação interna realizada pelo mesário para liberar a urna antes da deposição do voto
            op = int(input("Mesário, deseja encerrar a sessão de votação?    [0] Não  |  [1] Sim     "))
    
            if (op == 0):
            
                print("-----------------------------------------------------------------------------")
                break
                
            elif (op == 1):
                
                print("\n-----> ELEIÇÕES CONCLUÍDAS <-----")
                print("-----------------------------------------------------------------------------")
                operacao = False
                break
        
            else:
                
                print("\nOpção INVÁLIDA, Mesário! Verifique as opções e TENTE NOVAMENTE.")
                print("-----------------------------------------------------------------------------")
            
        except ValueError:
            
            print("\nERRO: Caracteres são INVÁLIDOS, Mesário! Verifique as opções e TENTE NOVAMENTE.")
            print("-----------------------------------------------------------------------------")
        
print("\n\n\n\n\n\n-------------------------RESULTADO DAS ELEIÇÕES 2022-------------------------\n")

########################################## CONSIDERAÇÃO DE SIMPLIFICAÇÃO DO PROBLEMA ##########################################
'''A condição de empate de candidatos na primeira colocação (igualdado de votos) implicaria fatalmente em possível segundo turno.
Entretanto, essa condição não foi fomentada para o problema proposto. Dessa forma, não foram considerados casos de empate nos 
condicionais 'if' abaixo. Um segundo problema que poderia ser gerado para essa proposição, se daria mediante a consideração de que os 
três candidatos não obtivessem minimamente um voto sequer. Essa consideração hipotética seria válida se o espaço amostral trabalhado 
fosse de uma pequena quantidade votos, mas que em uma eleição de larga escala tornaria-se quase que impossível de ocorrer (situação 
real). Tendo em vista uma situação mais realista (afim de simplificação do problema), também não foi implementado o caso em que não 
haveriam votos para nenhum dos três candidatos numa mesma eleição.'''

if (candX > candY) and (candX > candZ):
    
    print("O CANDIDATO X está ELEITO: " + str(candX) + " votos\n")
    print("Candidato Y: " + str(candY) + " votos")
    print("Candidato Z: " + str(candZ) + " votos\n")
    print("Branco: " + str(branco) + " votos")
    print("Nulo: " + str(nulo) + " votos")
    
elif (candY > candX) and (candY > candZ):
    
    print("O CANDIDATO Y está ELEITO: " + str(candY) + " votos\n")
    print("Candidato X: " + str(candX) + " votos")
    print("Candidato Z: " + str(candZ) + " votos\n")
    print("Branco: " + str(branco) + " votos")
    print("Nulo: " + str(nulo) + " votos")
    
elif (candZ > candX) and (candZ > candY):
    
    print("O CANDIDATO Z está ELEITO: " + str(candZ) + " votos\n")
    print("Candidato X: " + str(candX) + " votos")
    print("Candidato Y: " + str(candY) + " votos\n")
    print("Branco: " + str(branco) + " votos")
    print("Nulo: " + str(nulo) + " votos")

else:
    
    print("Resultado Eleitoral INDETERMINADO! (OBS:. conforme condições do problema proposto)")
    
print("\n-----------------------------------------------------------------------------")