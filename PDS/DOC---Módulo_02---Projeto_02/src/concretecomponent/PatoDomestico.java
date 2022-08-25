//pacote base
package concretecomponent;

//import da interface 'Pato'
import interfaces.Pato;

//definição da classe 'PatoDomestico'
public class PatoDomestico implements Pato {

    //método construtor
    public PatoDomestico(){}

    //método 'fazerQuaQua'
    public String fazerQuaQua(){

        return "'Quááác, Quááác'";

    }

    //método 'voar'
    public String voar(){

        return "Voo Curto";

    }
    
}