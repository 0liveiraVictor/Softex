//pacote base
package concretestrategy;

//import da interface 'Strategy'
import strategy.Strategy;

//definição da classe 'Sum'
public class Sum implements Strategy {

    //método 'execute' (soma)
    public int execute(int v1, int v2){

        int resultado = v1 + v2;
        return resultado;

    }
    
}