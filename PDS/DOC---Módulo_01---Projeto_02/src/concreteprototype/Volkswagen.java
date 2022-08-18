//pacote base
package concreteprototype;

//import da classe abstrata 'Vehicle'
import prototype.Vehicle;

//classe concreta 'Volkswagen' (subclasse de 'Vehicle') 
public class Volkswagen extends Vehicle {

    //atributos da classe
    public String especie;
    public String categoria; 
    public double peso;

    //construtor base
    public Volkswagen(){}

    //construtor do protótipo
    public Volkswagen(Volkswagen volkswagen){
        
        super(volkswagen);
        if(volkswagen != null){
        
            this.especie = volkswagen.especie;
            this.categoria = volkswagen.categoria;
            this.peso = volkswagen.peso;
        
        }

    }

    //método clone para objetos (veículos) da 'Volkswagen'
    @Override
    public Vehicle clone(){

        return new Volkswagen(this);

    }
    
}