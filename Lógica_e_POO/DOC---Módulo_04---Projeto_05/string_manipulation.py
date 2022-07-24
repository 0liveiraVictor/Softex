#variáveis 'txt1' e 'txt2' do tipo string
txt1 = "A ciência é o conhecimento ou um sistema de conhecimentos que abarca fatos, os mais gerais e abrangentes possíveis, bem como a aplicação das leis científicas."
txt2 = "Nestes termos, ciência é algo bem distinto de cientista, podendo ser definida como o conjunto que encerra em si o corpo sistematizado e cronologicamente organizado de todas as teorias científicas."

#método de concatenação (FUNÇÃO 1)
def concat(par1, par2):

    return par1 + " " + par2

#método de letras maiusculas e minusculas (FUNÇÕES 2)
def maiuscula(par1):

    return par1.upper()

def minuscula(par1):

    return par1.lower()

#método separador a partir de um delimitador (função 'separador') (FUNÇÃO 3)
def separador(par1):
    
    return par1.split(',')

print("----------------------------------MANIPULAÇÃO DE STRING----------------------------------\n")

#método concat para unir as strings 'txt1' e 'txt2' (FUNÇÃO 1)
txtResult1 = concat(txt1, txt2)
print("_____Método 'concat'_____")
print(txtResult1)

print("")

#estrutura textual do resultado de 'txtResult1' com letras maiusculas e minusculas, respectivamente (FUNÇÃO 2)
txtResult2 = maiuscula(txtResult1)
print("_____Método 'maiusculo'_____")
print(txtResult2)

print("")

txtResult3 = minuscula(txtResult1)
print("_____Método 'minusculo'_____")
print(txtResult3)

print("")

#quebra de linha do 'txt1' a partir do método separador (delimitado por ','). a exibição ocorre linha por linha (FUNÇÃO 3)
txtResult4 = separador(txt1)
print("_____Método 'separador'_____")
for linha in txtResult4:
    print(linha)

print("\n-----------------------------------------------------------------------------------------")