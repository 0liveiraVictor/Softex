//pacote base
package prototype;

//classe abstrata 'Vehicle'
public abstract class Vehicle {

    //atributos da classe
    public String modelo; 
    public String marca;
    public String cor;
    public int numeroRodas;

    //atributos das sub-classes
    public String especie;
    public String categoria; 
    public double peso;

    //construtor normal
    public Vehicle(){}

    //construtor do protótipo
    public Vehicle(Vehicle vehicle){

        this.modelo = vehicle.modelo;
        this.marca = vehicle.marca;
        this.cor = vehicle.cor;
        this.numeroRodas = vehicle.numeroRodas;

    }

    //assinatura do método de cópia (abstract method)
    public abstract Vehicle clone();

    //método represent
    public void represent(Vehicle[] arrayPrint){

        for(int i = 0; i < arrayPrint.length; i++){

            System.out.println("<<< " + (i + 1) + "º VEÍCULO >>>");
            System.out.println("Marca: " + arrayPrint[i].marca);
            System.out.println("Modelo: " + arrayPrint[i].modelo);
            System.out.println("Categoria: " + arrayPrint[i].categoria);
            System.out.println("Espécie: " + arrayPrint[i].especie);
            System.out.println("Cor: " + arrayPrint[i].cor);
            System.out.println("Nº de Rodas: " + arrayPrint[i].numeroRodas);
            System.out.println("Peso: " + arrayPrint[i].peso + " Kg");
            System.out.println("\n");

        }

    }

}