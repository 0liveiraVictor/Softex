#!/usr/bin/env python
# coding: utf-8

# ## Definição de Tipo Abstrato de Dado (TAD) para Manipular Números Complexos

# #### _______ TAD com os métodos de operações básicas aplicados nos cálculos de três números complexos _______

# In[1]:


###Definição da classe ComplexNumberOperation
class ComplexNumberOperation():
    
    ##Instânciando o objeto composto por três números complexos (método construtor):.
    
    def __init__(self, real1, img1, real2, img2, real3, img3):
        #real1 = parte real do 1º nº complexo; img1 = parte imaginária do 1º nº complexo; (seguindo a lógica dos outros dois números) ...
        self.R1 = real1
        self.I1 = img1
        self.R2 = real2
        self.I2 = img2
        self.R3 = real3
        self.I3 = img3
        
        print("O PRIMEIRO número complexo definido foi: (%d, %di)" %(self.R1, self.I1))
        print("O SEGUNDO número complexo definido foi: (%d, %di)" %(self.R2, self.I2))
        print("O TERCEIRO número complexo definido foi: (%d, %di)" %(self.R3, self.I3))
             
    ##Definição dos métodos de operações básicas para os três números complexos definidos:. 
    
    def CalcSoma(self):
        #Cálculo de soma entre os três números complexos (Z1+Z2+Z3)
        realSoma = (self.R1 + self.R2 + self.R3)
        imgSoma = (self.I1 + self.I2 + self.I3)      
        print("A SOMA dos três números complexos resultou em: (%d, %di)" %(realSoma, imgSoma))
        
    def CalcSubtracao(self):
        #Cálculo de subtração entre os três números complexos (Z1-Z2-Z3)
        realSubt = (self.R1 - self.R2 - self.R3)
        imgSubt = (self.I1 - self.I2 - self.I3)      
        print("A SUBTRAÇÃO dos três números complexos resultou em: (%d, %di)" %(realSubt, imgSubt))
        
    def CalcMultiplicacao(self):
        #Cálculo de multiplicação entre os três números complexos (Z1*Z2*Z3)
        #O produto entre os números foi realizado na ordem especificada, resultando nas partes real e imaginário em:
        realMult = (self.R1*self.R2*self.R3 - self.I1*self.I2*self.R3 - self.R1*self.I2*self.I3 - self.I1*self.R2*self.I3)
        imgMult = (self.R1*self.R2*self.I3 - self.I1*self.I2*self.I3 + self.R1*self.I2*self.R3 + self.I1*self.R2*self.R3)       
        print("A MULTIPLICAÇÃO dos três números complexos resultou em: (%d, %di)" %(realMult, imgMult))
        
    def CalcDivisao(self):
        #Cálculo de divisão entre os três números complexos ((Z1/Z2)/Z3)
        #A divisão entre os números foi realizado na ordem especificada, resultando nas partes real e imaginário em:
        realDiv = ((self.R1*self.R2*self.R3 - self.R1*self.I2*self.I3 + self.R2*self.I1*self.I3 + self.R3*self.I1*self.I2)/(self.R2*self.R2*self.R3*self.R3 + self.I2*self.I2*self.I3*self.I3 + self.R2*self.R2*self.I3*self.I3 + self.R3*self.R3*self.I2*self.I2))
        imgDiv = ((self.R2*self.R3*self.I1 - self.I1*self.I2*self.I3 - self.R1*self.R2*self.I3 - self.R1*self.R3*self.I2)/(self.R2*self.R2*self.R3*self.R3 + self.I2*self.I2*self.I3*self.I3 + self.R2*self.R2*self.I3*self.I3 + self.R3*self.R3*self.I2*self.I2)) 
        print("A DIVISÃO dos três números complexos resultou em: ({:.5f}, {:.5f}i)".format(realDiv, imgDiv))
    


# ####  _______ Resultado dos cálculos das operações básicas com os números complexos mediante uso da TAD implementada _______

# In[2]:


print("-----------------------OPERAÇÕES BÁSICAS DE NÚMEROS COMPLEXOS VIA IMPLEMENTAÇÃO DA TAD-----------------------")
print("\n")

#Instânciando cno (complex number operation) como objeto da classe ComplexNumberOperation e definindo os três números complexos como paramêtros para o método construtor (__init__)
cno = ComplexNumberOperation(7, 4, 1, -1, -2, 3)
print("\n")


#Operação de soma dos três números complexo pré-definidos usando o método CalcSoma:.
cno.CalcSoma()

#Operação de subtração dos três números complexo pré-definidos usando o método CalcSubtracao:.
cno.CalcSubtracao()

#Operação de multiplicação dos três números complexo pré-definidos usando o método CalcMultiplicacao:.
cno.CalcMultiplicacao()

#Operação de divisão dos três números complexo pré-definidos usando o método CalcDivisao:.
cno.CalcDivisao()
print("\n")

print("-------------------------------------------------------------------------------------------------------------")


# ####  _______ Um paralelo dos resultados obtidos com a função complex() (biblioteca cmath) a fim de validar a TAD construída _______

# In[3]:


import cmath

#Definicação dos mesmos três números complexos usados no teste de operações da TAD:.
z1 = 7 + 4j
z2 = 1 - 1j
z3 = -2 + 3j
#______________________________________________________

print("--------------------OPERAÇÕES DE NÚMEROS COMPLEXOS VIA FUNÇÃO COMPLEX DA BIBLIOTECA 'cmath'--------------------")
print("\n")

print("O PRIMEIRO número complexo definido foi: ", z1)
print("O SEGUNDO número complexo definido foi: ", z2)
print("O TERCEIRO número complexo definido foi: ", z3)
print("\n")

print("A SOMA dos três números complexos resultou em: ", z1+z2+z3)
print("A SUBTRAÇÃO dos três números complexos resultou em: ", z1-z2-z3)
print("A MULTIPLICAÇÃO dos três números complexos resultou em: ", z1*z2*z3)
print("A DIVISÃO dos três números complexos resultou em: ", z1/z2/z3)
print("\n")
print("-------------------------------------------------------------------------------------------------------------")