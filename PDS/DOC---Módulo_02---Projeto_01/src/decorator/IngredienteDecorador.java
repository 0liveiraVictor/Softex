//pacote base
package decorator;

//import da classe abstrata 'Sanduiche'
import component.Sanduiche;

//definição da classe abstrata 'IngredienteDecorador'
public abstract class IngredienteDecorador extends Sanduiche {

    //método abstrato para obter a descrição do sanduíche
    public abstract String getDescription();
    
}