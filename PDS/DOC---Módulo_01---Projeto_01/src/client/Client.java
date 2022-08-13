//package base
package client;

//import da interface 'Computer' e da classe concreta de tipo fábrica (ComputerFactory)
import productinterface.Computer;
import concretecreater.ComputerFactory;

//solicitação do cliente à fábrica de computadores
public class Client{

    //programa principal (OBS:. cliente não tem acesso as classes concretas de produtos ('Pc' e 'Server')!)
    public static void main(String args[]){

        //fabricando computador do tipo 'pc'
        Computer computadorPC = ComputerFactory.createComputer("pc", 1000, 4, 2.4);
        System.out.println(computadorPC.toString());

        //fabricando computador do tipo 'server'
        Computer computadorSERVER = ComputerFactory.createComputer("server", 500000, 128, 3.0);
        System.out.println(computadorSERVER.toString());

    }

}