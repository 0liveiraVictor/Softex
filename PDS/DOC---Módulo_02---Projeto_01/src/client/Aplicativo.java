//pacote base
package client;

//import da classe abstrata 'Sanduiche' e das classes concretas necessárias para o programa
import component.Sanduiche;
import concretecomponent.FrangoAssado;
import concretedecorator.*;

//definição da classe de aplicação 'Aplicativo'
public class Aplicativo {

    //método de impressão do pedido do cliente
    public static void imprimirPedido(Sanduiche pedido){

        System.out.println("PEDIDO: " + pedido.getDescription());
        System.out.println("CUSTO: $" + pedido.getCost());

    }

    //método de impressão do tipo de sanduíche do cliente
    public static void imprimirSanduiche(Sanduiche sanduiche){

        System.out.println("\n<<<" + sanduiche.getDescription() + " custa $" + sanduiche.getCost() + ">>>");

    }

    //método de impressão do ingrediente adicional requerido pelo cliente
    public static void imprimirIngrediente(Sanduiche ingrediente){

        System.out.println("\n<<<Ingrediente adicional '" + ingrediente.getFlavorDescription() + "' custa $" + ingrediente.getFlavorCost() + ">>>");
        
    }
    
    //programa principal
    public static void main(String[] args) {

        //construindo o sanduíche e decorando com os ingredientes adicionais
        Sanduiche sanduiche1 = new FrangoAssado(); //sanduíche de frango assado solicitado pelo cliente
        Sanduiche sanduiche1_add1 = new Pepperoni(sanduiche1); //adicionando pepperoni no sanduíche
        Sanduiche sanduiche1_add2 = new QueijoMussarelaRalado(sanduiche1_add1); //adicionando queijo mussarela ralado no sanduíche

        //impressão das solicitações do cliente
        System.out.println("---------------------------------------------SANDUÍCHES---------------------------------------------\n\n");
        imprimirPedido(sanduiche1_add2);
        imprimirSanduiche(sanduiche1);
        imprimirIngrediente(sanduiche1_add1);
        imprimirIngrediente(sanduiche1_add2);
        System.out.println("\n\n----------------------------------------------------------------------------------------------------");

    }

}