//pacote base
package concretedecorator;

//import das classes abstratas 'Sanduiche' e 'IngredienteDecorador'
import component.Sanduiche;
import decorator.IngredienteDecorador;

//definição da classe concreta decoradora 'QueijoMussarelaRalado'
public class QueijoMussarelaRalado extends IngredienteDecorador {

    //variável de instância 'decorator' apontadora do objeto 'Sanduiche'
    private final Sanduiche decorator;

    //propriedades de decoração da classe
    private String flavorDescription = "Queijo Mussarela Ralado";
    private double flavorCost = 2.00;

    //método construtor (o parâmetro recebido é o objeto, tipo 'Sanduiche', a ser decorado)
    public QueijoMussarelaRalado(Sanduiche objDecorado){

        this.decorator = objDecorado;

    }

    //método 'get' para 'decorator'
    public Sanduiche getDecorator(){

        return decorator;

    }    

    //método 'get' para obter o sabor do ingrediente adicional 'Queijo Mussarela Ralado' do sanduíche
    @Override
    public String getFlavorDescription(){

        return flavorDescription;

    }    

    //método 'get' para obter o custo do ingrediente adicional 'Queijo Mussarela Ralado' do sanduíche
    @Override
    public double getFlavorCost(){

        return flavorCost;

    }    

    //método 'get' para 'descrição' do sanduíche escolhido (método com recursividade)
    @Override
    public String getDescription(){

        return decorator.getDescription() + ", " + flavorDescription;

    }

    //método 'get' para adição 'custo' no sanduíche escolhido (método com recursividade)
    @Override
    public double getCost(){

        return decorator.getCost() + flavorCost;

    }
    
}