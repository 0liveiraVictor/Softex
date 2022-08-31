//pacote base
package context;

//import da interface 'Strategy'
import strategy.Strategy;

//definição da classe 'Context'
public class Context {

    //atributo 'strategy' do tipo 'Strategy'
    private Strategy strategy;

    //método 'set' para 'strategy'
    public void setStrategy(Strategy newStrategy){

        this.strategy = newStrategy;

    }

    //método 'execute'
    public int execute(int numero1, int numero2){

        return strategy.execute(numero1, numero2);

    }

}