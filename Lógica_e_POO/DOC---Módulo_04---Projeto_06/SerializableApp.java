//import dos módulos 'java.io' e da classe 'Animal_class' do pacote 'classe'
import java.io.*;
import classe.Animal_class;

//classe de serialização
public class SerializableApp{

    //programa principal de serialização
    public static void main(String[] args) throws IOException, ClassNotFoundException {

        //instanciando o objeto 'dogCedric' da classe 'Animal_class' criada
        Animal_class dogCedric = new Animal_class("cachorro", "cedric", "chihuahua", 10);

        //instanciando um arquivo de saída 'arqOutput' com nome dogCedric.flow (endereçado no diretório 'classe')
        FileOutputStream arqOutput = new FileOutputStream("classe/dogCedric.flow");

        //instanciando um objeto da classe 'ObjectOutputStream' para manipular o fluxo da saída de dados para o arquivo de destino 'arqOutput'
        ObjectOutputStream objOutput = new ObjectOutputStream(arqOutput);

        //escrevendo os dados do objeto 'dogCedric' no objeto 'fluxo de saída' e consequentemente no arquivo de saída 'arqOutput'
        objOutput.writeObject(dogCedric);

        //finalizando conexão
        objOutput.close();
        
        /*A execução cria o arquivo 'dogCedric.flow' com os dados do objeto cachorro cedric*/
        
    }

}