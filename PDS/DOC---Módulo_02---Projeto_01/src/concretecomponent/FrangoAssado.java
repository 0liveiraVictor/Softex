//pacote base
package concretecomponent;

//import da classe abstrata 'Sanduiche'
import component.Sanduiche;

//definição da classe concreta 'FrangoAssado'
public class FrangoAssado extends Sanduiche {

    //propriedades da classe
    private String flavorDescription = "Sanduíche de Frango Assado";
    private double flavorCost = 4.50;

    //método 'get' para obter o sabor do tipo de sanduíche
    @Override
    public String getFlavorDescription(){

        return flavorDescription;

    }    

    //método 'get' para obter o custo do tipo de sanduíche
    @Override
    public double getFlavorCost(){

        return flavorCost;

    }    

    //método 'get' para 'descrição' do sanduíche (funcional quando houver o uso de uma descrição com recursividade)
    @Override
    public String getDescription(){

        return flavorDescription;

    }

    //método 'get' para 'custo' do sanduíche (funcional quando houver o uso de um custo com recursividade)
    @Override
    public double getCost(){

        return flavorCost;

    }
    
}