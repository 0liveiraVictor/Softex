//package base
package concreteproduct;

//import da interface 'Computer'
import productinterface.Computer;

//classe concreta do produto 'Server'
public class Server implements Computer{

    //atributos do computador do tipo 'server'
    private String type;
    private int hdd;
    private int ram;
    private double cpu;

    //construtor da classe concreta 'Server' (método implícito)
    public Server(String type, int hdd, int ram, double cpu){

        this.type = type;
        this.hdd = hdd;
        this.ram = ram;
        this.cpu = cpu;

    }

    //método 'get' do atributo 'type'
    public String getType(){

        return this.type;

    }

    //método 'get' do atributo 'hdd'
    public int getHdd(){

        return this.hdd;

    }
    
    //método 'get' do atributo 'ram'
    public int getRam(){

        return this.ram;

    }

    //método 'get' do atributo 'cpu'
    public double getCpu(){

        return this.cpu;

    }

    //método de exibição dos atributos do computador do tipo 'server'
    public String toString(){

        return "----------------------FÁBRICA DE COMPUTADORES----------------------\n\n" + "<<< Produto Fabricado -> 'Computador' >>>\n" + "Tipo: " + this.type + "\nArmazenamento HDD (GB): " + String.valueOf(this.hdd) + "\nArmazenamento RAM (GB): " + String.valueOf(this.ram) + "\nFrequência CPU (GHz): " + Double.toString(this.cpu) + "\n\n-------------------------------------------------------------------\n\n";
    
    }
    
}