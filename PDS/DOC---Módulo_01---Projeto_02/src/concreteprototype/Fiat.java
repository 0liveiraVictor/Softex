//pacote base
package concreteprototype;

//import da classe abstrata 'Vehicle'
import prototype.Vehicle;

//classe concreta 'Fiat' (subclasse de 'Vehicle') 
public class Fiat extends Vehicle {

    //atributos da classe
    public String especie;
    public String categoria;  
    public double peso;

    //construtor base
    public Fiat(){}

    //construtor do protótipo
    public Fiat(Fiat fiat){
        
        super(fiat);
        if(fiat != null){
        
            this.especie = fiat.especie;
            this.categoria = fiat.categoria;
            this.peso = fiat.peso;
        
        }

    }

    //método clone para objetos (veículos) da 'Fiat'
    @Override
    public Vehicle clone(){

        return new Fiat(this);

    }
    
}