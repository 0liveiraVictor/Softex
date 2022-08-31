//pacote base
package concretestrategy;

//import da interface 'Strategy'
import strategy.Strategy;

//definição da classe 'Subtraction'
public class Subtraction implements Strategy {

    //método 'execute' (subtração)
    public int execute(int v1, int v2){

        int resultado = v1 - v2;
        return resultado;

    }
    
}