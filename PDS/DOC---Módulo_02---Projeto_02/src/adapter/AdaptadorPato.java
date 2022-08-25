//pacote base
package adapter;

//import das interfaces 'Galinha' e 'Pato'
import interfaces.Galinha;
import interfaces.Pato;

//definição da classe 'AdaptadorPato'
public class AdaptadorPato implements Galinha {

    private Pato patoAdaptado;

    //método construtor
    public AdaptadorPato(Pato pato){

        this.patoAdaptado = pato;

    }

    //método 'get' de 'patoAdaptado'
    public Pato getPatoAdaptado(){

        return patoAdaptado;

    }

    //método 'fazerCocorico'
    public String fazerCocorico(){

        return this.patoAdaptado.fazerQuaQua();

    }

    //método 'voar'
    public String voar(){

        return this.patoAdaptado.voar();

    }
    
}