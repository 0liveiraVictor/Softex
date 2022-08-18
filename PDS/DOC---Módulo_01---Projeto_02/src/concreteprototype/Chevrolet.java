//pacote base
package concreteprototype;

//import da classe abstrata 'Vehicle'
import prototype.Vehicle;

//classe concreta 'Chevrolet' (subclasse de 'Vehicle') 
public class Chevrolet extends Vehicle {

    //atributos da classe
    public String especie;
    public String categoria;  
    public double peso;

    //construtor base
    public Chevrolet(){}

    //construtor do protótipo
    public Chevrolet(Chevrolet chevrolet){
        
        super(chevrolet);
        if(chevrolet != null){
        
            this.especie = chevrolet.especie;
            this.categoria = chevrolet.categoria;
            this.peso = chevrolet.peso;
        
        }

    }

    //método clone para objetos (veículos) da 'Chevrolet'
    @Override
    public Vehicle clone(){

        return new Chevrolet(this);

    }
    
}