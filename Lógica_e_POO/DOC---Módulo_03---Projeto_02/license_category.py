print("----------------------------------CARACTERÍSTICAS VEICULAR----------------------------------\n")
qtdRodas = int(input("Digite a QUANTIDADE DE RODAS do veículo: "))
Peso = float(input("Digite o PESO BRUTO do veículo (em Kg): "))
qtdPessoas = int(input("Digite a QUANTIDADE DE PESSOAS que o veículo comporta: "))

########################################---CATEGORIA DE HABILITAÇÃO---########################################
##### A: Veículos com duas ou três rodas;
##### B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
##### C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
##### D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
##### E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
##############################################################################################################

if (qtdRodas == 2) or (qtdRodas == 3):
    print("\n\n O veículo está classificado na categoria de habilitação 'A'!")

elif (qtdRodas == 4) and (qtdPessoas <= 8) and (Peso <= 3500):
    print("\n\n O veículo está classificado na categoria de habilitação 'B'!")
    
elif (qtdRodas >= 4) and (6000 >= Peso > 3500):
    print("\n\n O veículo está classificado na categoria de habilitação 'C'!")
    
elif (qtdRodas >= 4) and (qtdPessoas > 8):
    print("\n\n O veículo está classificado na categoria de habilitação 'D'!")
    
elif (qtdRodas >= 4) and (Peso > 6000):
    print("\n\n O veículo está classificado na categoria de habilitação 'E'!")
    
else:
    print("\n\n O veículo NÃO está classificado dentro da categoria de habilitação definida!")

print("\n--------------------------------------------------------------------------------------------")