//pacote base
package component;

//definição da classe abstrata 'Sanduiche'
public abstract class Sanduiche {

    //atributo da classe 
    private String description = "Sanduíche Desconhecido"; 
    /*a rigor, esse sanduíche desconhecido não será útil no programa, pois não haverá possibilidade de instanciar um objeto dessa classe.*/

    //método 'get' para obter a descrição do sanduíche
    public String getDescription(){

        return description;

    }

    //método abstrato para obter custo
    public abstract double getCost();

    //método abstrato para obter sabor (do tipo de sanduíche ou decorador adicionado)
    public abstract String getFlavorDescription();

    //método abstrato para obter custo (do tipo de sanduíche ou decorador adicionado)
    public abstract double getFlavorCost();
    
}