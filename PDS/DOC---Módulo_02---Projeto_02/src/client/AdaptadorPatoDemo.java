//pacote base
package client;

//import das interfaces 'Galinha' e 'Pato', e das classes concretas 'PatoDomestico' e 'AdaptadorPato'
import interfaces.Galinha;
import interfaces.Pato;
import concretecomponent.PatoDomestico;
import adapter.AdaptadorPato;

//definição da classe de aplicação 'AdaptadorPatoDemo'
public class AdaptadorPatoDemo {

    //programa principal
    public static void main(String[] args) {

        //instancias de objetos de classes concretas que implementam as interfaces 'Galinha' e 'Pato'
        Pato patoObj = new PatoDomestico();   //instanciando o objeto 'patoObj' do tipo 'Pato'
        Galinha galinhaObj = new AdaptadorPato(patoObj);   //instanciando o objeto 'galinhaObj', do tipo 'Galinha', a partir do parâmetro 'patoObj'

        //impressão da adaptação gerada
        System.out.println("-------------------------ADAPTAÇÃO DE UMA PATA EM UMA GALINHA (CENAS DA FALSA GALINHA)-------------------------\n\n");
        System.out.println("<<< A falsa galinha encena duas ações: 1) Cacarejar e 2) Voar >>>");
        System.out.println("1ª Cena (Cacarejo) ---> AÇÃO: " + galinhaObj.fazerCocorico());
        System.out.println("2ª Cena (Voo) ---> AÇÃO: " + galinhaObj.voar());
        System.out.println("\n___________________________________________________________________________\n");
        System.out.println("Direção: 'OPS! Nossa atriz não é uma galinha, é na verdade uma PATA!'");
        System.out.println("___________________________________________________________________________");
        System.out.println("\n\n---------------------------------------------------------------------------------------------------------------");

    }
    
}