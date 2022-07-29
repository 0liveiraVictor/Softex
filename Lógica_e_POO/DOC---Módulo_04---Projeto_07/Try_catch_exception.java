//import da classe 'Scanner' (leitura de dados de entrada pelo teclado) e 'InputMismatchException' (tratamento de exceções da leitura dos dados)
import java.util.Scanner;
import java.util.InputMismatchException;

//classe try/catch (exception)
public class Try_catch_exception {

    //programa principal
    public static void main(String[] args) {

        //declaração das variáveis 
        String nome;
        int idade;
        long cpf; 

        //instanciando o objeto 'input' (para leitura dos dados de entrada no teclado)
        Scanner input = new Scanner(System.in);

        System.out.print("-------------------SISTEMA DE CADASTRO DE USUÁRIO-------------------\n\n");

        //início da leitura dos dados do usuário
        System.out.print("Digite seu nome completo: ");
        nome = input.nextLine();

        //bloco de avaliação das exceções
        try{             

            System.out.print("\nDigite sua idade (anos): ");
            idade = input.nextInt();

            System.out.print("\nDigite seu CPF (apenas números. ex. 99999999999): ");
            cpf = input.nextLong();

            System.out.println("\n--------------------------------------------------------------------");
        
            //fechamento da conexão do objeto de leitura 'input'
            input.close();

            //impressão dos dados cadastrados
            System.out.print("\n\n------------------------------------------------------------------------DADOS CADASTRAIS----------------------------------------------------------------------------");
            System.out.print("\n\nOlá, Sr(a) " + nome + " (" + Integer.toString(idade) + " anos), portador(a) do CPF: " + Long.toString(cpf) + ", seu cadastro foi efetuado com sucesso!");
            System.out.print("\n\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");
    
        //tratamento da exceção do tipo 'InputMismatchException'
        } catch(InputMismatchException erro){

            System.out.println("\nERRO: caracteres não são válidos, apenas números.");
            System.out.println("Por favor, execute novamente e tente mais uma vez.");
            System.out.println("\n--------------------------------------------------------------------");

        }   
   
    }
    
}