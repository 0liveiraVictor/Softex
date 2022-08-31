//pacote base
package client;

//import das classes 'Context', 'Sum', 'Subtraction', 'Multiplication' e 'Scanner' (para leitura dos dados)
import context.Context;
import concretestrategy.Sum;
import concretestrategy.Subtraction;
import concretestrategy.Multiplication;
import java.util.Scanner;

//definição da classe 'Application'
public class Application {

    //método estático para cálculo de resultado da calculadora (contendo a estratégia adotada pelo cliente)
    public static int resultado(Context context, int v1, int v2, String op){

        //possíveis estratégias de cálculo adotada pelo cliente (estruturas de repetição melhor direcionam na adoção da estratégia)
        if (op == "soma"){

            context.setStrategy(new Sum());

        } else if(op == "subtração"){

            context.setStrategy(new Subtraction());

        } else if(op == "multiplicação"){

            context.setStrategy(new Multiplication());

        }

        //cálculo do resultado após definição da estratégia
        int resultado = context.execute(v1, v2);

        return  resultado;

    }

    //programa principal
    public static void main(String[] args) {

        //instanciando um objeto de tipo 'Context' definido como 'calculadora'
        Context calculadora = new Context();

        //definição de input (para leitura dos dados)
        Scanner input = new Scanner(System.in);

        System.out.println("--------------------------------------------CALCULADORA--------------------------------------------\n\n");

        //leitura do primeiro valor declarado pelo cliente
        System.out.print("Digite o PRIMEIRO número: ");
        int numero1 = input.nextInt();

        //leitura do segundo valor declarado pelo cliente
        System.out.print("\nDigite o SEGUNDO número: ");
        int numero2 = input.nextInt();

        //leitura da opção (operação de cálculo) declarado pelo cliente
        System.out.print("\nDigite 'soma', 'subtração' ou 'multiplicação' para selecionar uma OPERAÇÃO de cálculo: ");
        String opcao = input.next();
        input.close();

        //cálculo do resultado final com o método 'resultado'
        int resultadoFinal = resultado(calculadora, numero1, numero2, opcao);

        //impressão do resultado
        System.out.println("\n\n\n<<<Resultado da Operação>>> : " + resultadoFinal);

        System.out.println("\n\n---------------------------------------------------------------------------------------------------\n");
        
    }
    
}