//package base
package concretecreater;

//import da interface 'Computer' e das classes concretas 'Pc' e 'Server'
import productinterface.Computer;
import concreteproduct.*;

//classe concreta 'ComputerFactory' (fábrica de computadores -> gerenciador dos produtos computadores)
public class ComputerFactory{

    //método estático 'createComputer' responsável pela criação das instâncias (definidas pelo cliente) do tipo abstrato da interface
    public static Computer createComputer(String type, int hdd, int ram, double cpu){

        if (type == "pc"){

            //criação do objeto da classe concreta 'Pc'
            return new Pc(type, hdd, ram, cpu);

        } else if(type == "server"){

            //criação do objeto da classe concreta 'Server'
            return new Server(type, hdd, ram, cpu);

        }

        return null;

    }
    
}