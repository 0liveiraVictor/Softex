//import dos módulos 'java.io' e da classe 'Animal_class' do pacote 'classe'
import java.io.*;
import classe.Animal_class;

//classe de desserialização
public class DeserializableApp{

    //programa principal de desserialização
    public static void main(String[] args) throws IOException, ClassNotFoundException {

        //instanciando um arquivo de entrada 'arqInput' para armazenamento dos dados do arquivo 'dogCedric.flow' (endereçado no diretório 'classe')
        FileInputStream arqInput = new FileInputStream("classe/dogCedric.flow");

        //instanciando um objeto da classe 'ObjectInputStream' para manipular o fluxo da entrada de dados no arquivo 'arqInput'
        ObjectInputStream objInput = new ObjectInputStream(arqInput);

        //casting da classe 'Animal_class' e leitura dos dados do 'objInput' (which_animal -> Qual é o animal?)
        Animal_class which_animal = (Animal_class) objInput.readObject();

        //finalizando conexão
        objInput.close();

        //leitura dos dados do objeto instanciado 'which_animal' armazenados originalmente no arquivo 'dogCedric.flow'
        System.out.println("----------------------------------------ANIMAL INSTANCIADO----------------------------------------\n");
        System.out.println("Tipo: " + which_animal.getAnimal());
        System.out.println("Nome: " + which_animal.getNome());
        System.out.println("Raça: " + which_animal.getRaca());
        System.out.println("Idade (ano(s)): " + which_animal.getIdade());
        System.out.println("\n-------------------------------------------------------------------------------------------------");
        
    }

}