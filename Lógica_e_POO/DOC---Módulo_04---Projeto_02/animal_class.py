#classe Animal definida
class Animal:
    
    #três variáveis (da classe) que armazenam o total de registro de cachorro, gato e papagaio no sistema
    tCachorro = 0
    tGato = 0
    tPapagaio = 0

    #variável (da classe) que armazena o total de qualquer animal, diferente dos citados acima, registrado no sistema
    tAnimal = 0

    #método construtor (função de instância dos objetos da classe)
    def __init__(self, animal, raca, idade):

        self.animal = animal
        self.raca = raca
        self.idade = idade
        
        print(f"O 'objeto' {self.animal}, raça {self.raca}, {self.idade} ano(s) de idade, foi INSTÂNCIADO na classe Animal.")

    #método de contabilização (via incremento) do registro de cada animal instânciado (cachorro, gato, papagaio e outro animal)
    def registroAnimal (self):

        if (self.animal == 'cachorro'):

            Animal.tCachorro += 1
            print(f"O(a) {self.animal}, raça {self.raca}, {self.idade} ano(s) de idade, foi REGISTRADO(A) na classe Animal.")
            return
        
        elif (self.animal == 'gato'):

            Animal.tGato += 1
            print(f"O(a) {self.animal}, raça {self.raca}, {self.idade} ano(s) de idade, foi REGISTRADO(A) na classe Animal.")
            return
        
        elif (self.animal == 'papagaio'):

            Animal.tPapagaio += 1
            print(f"O(a) {self.animal}, raça {self.raca}, {self.idade} ano(s) de idade, foi REGISTRADO(A) na classe Animal.")
            return
        
        else:
            
            Animal.tAnimal += 1
            print(f"O(a) {self.animal}, raça {self.raca}, {self.idade} ano(s) de idade, foi REGISTRADO(A) na classe Animal.")
            return

    #método estático para impressão dos valores de registro de todos os animais
    @staticmethod  
    def totalRegistros():

        print(f"Total de cachorros registrados: {Animal.tCachorro}")
        print(f"Total de gatos registrados: {Animal.tGato}")
        print(f"Total de papagaios registrados: {Animal.tPapagaio}")
        print(f"Total de outros animais registrados: {Animal.tAnimal}")
        return

print("--------------------------------------CLASSE ANIMAL--------------------------------------\n")

#instânciando seis 'objetos' animais
ani1 = Animal('cachorro', 'chihuahua', 10)
ani2 = Animal('cachorro', 'schnauzer', 16)
ani3 = Animal('gato', 'persa', 3)
ani4 = Animal('papagaio', 'cara-roxa', 4)
ani5 = Animal('papagaio', 'verdadeiro', 2)
ani6 = Animal('gado', 'Marrua', 1)

print("")

#realizando o registro dos seis animais
ani1.registroAnimal()
ani2.registroAnimal()
ani3.registroAnimal()
ani4.registroAnimal()
ani5.registroAnimal()
ani6.registroAnimal()

print("")

#imprimindo na tela a contabilização de todos os registros dos animais
Animal.totalRegistros()

print("\n-----------------------------------------------------------------------------------------")