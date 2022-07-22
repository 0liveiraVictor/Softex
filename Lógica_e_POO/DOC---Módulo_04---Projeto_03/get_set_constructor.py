#classe referente ao registro de torcedor para sua identificação em um estádio (ex: partida entre corinthians e palmeiras)
class RegistroEstadio:

    #método construtor (o registro do torcedor no estádio ocorrerá apenas para torcedores dos dois times que disputam a partida)
    def __init__(self, nome, id, time):

        #definindo a regra do registro dos objetos para poder instância-los
        if (time == 'corinthians') or (time == 'palmeiras'):

            self.__nome = nome          #os atributos 'nome' e 'id' estão privados. 
            self.__id = id              #qualquer acesso direto por parte do objeto aos atributos exibirão erro (ex. tor1.__nome)    

            print("Torcedor registrado. Acesso liberado!")

        else:

            print("Torcedor não poderá ver a partida. Acesso negado!")

    #método 'get' (acessor) para o atributo 'nome'
    def set_nome(self):
        return self.__nome

    #método 'set' (modificador) para o atributo 'nome'
    def get_nome(self, novonome):
        self.__nome = novonome
        return   

    #método 'get' (acessor) para o atributo 'id'
    def set_id(self):
        return self.__id

    #método 'set' (modificador) para o atributo 'id'
    def get_id(self, novoid):
        self.__id = novoid
        return   

print("--------------------------------------PARTIDA DE FUTEBOL--------------------------------------\n")

#instânciando cinco torcedores para assistir a partida 
tor1 = RegistroEstadio('Victor Oliveira', '4879', 'corinthians')
tor2 = RegistroEstadio('Paulo Grego', '7894', 'palmeiras')
tor3 = RegistroEstadio('Lucas Marinho', '4210', 'corinthians')
tor4 = RegistroEstadio('Iane Piton', '5568', 'flamengo')
tor5 = RegistroEstadio('Flávia Nunes', '4177', 'coritiba')

print("")

#usando o método especial 'set' para acessar 'nome' e 'id' dos torcedores registrados no estádio
#tor1, tor2 e tor3 serão os únicos a poder acessar o estádio
print("Torcedores liberados para acessar o estádio:")
print(f"{tor1.set_nome()} | id = {tor1.set_id()}")
print(f"{tor2.set_nome()} | id = {tor2.set_id()}")
print(f"{tor3.set_nome()} | id = {tor3.set_id()}")

#usando o método especial 'get' para modificar o 'nome' e 'id' do torcedor 3
#(ex. desistência do torcedor para ver a partida e venda do ingresso para outra pessoa)
tor3.get_nome('Laís Matias')
tor3.get_id('9851')

#usando o método especial 'set' para acessar 'nome' e 'id' dos torcedores no estádio
print("\nTorcedores presentes no estádio:")
print(f"{tor1.set_nome()} | id = {tor1.set_id()}")
print(f"{tor2.set_nome()} | id = {tor2.set_id()}")
print(f"{tor3.set_nome()} | id = {tor3.set_id()}")

print("\n----------------------------------------------------------------------------------------------")