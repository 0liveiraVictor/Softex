//pacote base
package client;

//import da classe abstrata 'Vehicle' e das classes concretas de veículos: 'Fiat', 'Chevrolet' e 'Volkswagen'
import prototype.Vehicle;
import concreteprototype.*;

//classe de aplicação ('Application')
public class Application {

    //programa principal
    public static void main(String[] args) {

        //definindo dois arrays (1º array -> 'veículos' | 2º array -> 'veículos clonados')
        Vehicle[] vehicleArray = new Vehicle[6];
        Vehicle[] vehicleArrayClone = new Vehicle[vehicleArray.length];

        //estabelecendo uma instância da sub-classe 'Fiat' APENAS para chamada do método 'represent' (definido na classe abstrata 'Vehicle')
        Vehicle print = new Fiat(); //ou Vehicle print = new Chevrolet(); ou Vehicle print = new Volkswagen();

        //instância do veículo 1 - (1º 'Fiat')
        Vehicle vehicleFiat1 = new Fiat();
        
            vehicleFiat1.modelo = "Palio Atractive";
            vehicleFiat1.marca = "Fiat";
            vehicleFiat1.cor = "Prata";
            vehicleFiat1.numeroRodas = 4;
            vehicleFiat1.especie = "Passeio";
            vehicleFiat1.categoria = "Transporte de Passageiros";
            vehicleFiat1.peso = 999.0;

        //instância do veículo 2 - (2º 'Fiat')
        Vehicle vehicleFiat2 = new Fiat();
        
            vehicleFiat2.modelo = "Argo Abarth";
            vehicleFiat2.marca = "Fiat";
            vehicleFiat2.cor = "Vermelho, Branco e Preto";
            vehicleFiat2.numeroRodas = 4;
            vehicleFiat2.especie = "Esportivo";
            vehicleFiat2.categoria = "Transporte de Passageiros";
            vehicleFiat2.peso = 1140.0;

        //instância do veículo 3 - (1º 'Chevrolet')
        Vehicle vehicleChevrolet1 = new Chevrolet();
        
            vehicleChevrolet1.modelo = "Cruze V8";
            vehicleChevrolet1.marca = "Chevrolet";
            vehicleChevrolet1.cor = "Amarelo e Preto";
            vehicleChevrolet1.numeroRodas = 4;
            vehicleChevrolet1.especie = "Corrida";
            vehicleChevrolet1.categoria = "Competição";
            vehicleChevrolet1.peso = 1300.0;

        //instância do veículo 4 - (2º 'Chevrolet')
        Vehicle vehicleChevrolet2 = new Chevrolet();
        
            vehicleChevrolet2.modelo = "Equinox Premier";
            vehicleChevrolet2.marca = "Chevrolet";
            vehicleChevrolet2.cor = "Cinza Drake";
            vehicleChevrolet2.numeroRodas = 4;
            vehicleChevrolet2.especie = "Passeio";
            vehicleChevrolet2.categoria = "Transporte de Passageiros";
            vehicleChevrolet2.peso = 1675.0;

        //instância do veículo 5 - (1º 'Volkswagen')
        Vehicle vehicleVolkswagen1 = new Volkswagen();
        
            vehicleVolkswagen1.modelo = "Constellation 26.420";
            vehicleVolkswagen1.marca = "Volkswagen";
            vehicleVolkswagen1.cor = "Vinho";
            vehicleVolkswagen1.numeroRodas = 10;
            vehicleVolkswagen1.especie = "Caminhão";
            vehicleVolkswagen1.categoria = "Transporte de Carga";
            vehicleVolkswagen1.peso = 63000.0;

        //instância do veículo 6 - (2º 'Volkswagen')
        Vehicle vehicleVolkswagen2 = new Volkswagen();
        
            vehicleVolkswagen2.modelo = "15.190 ODR (ORE 3)";
            vehicleVolkswagen2.marca = "Volkswagen";
            vehicleVolkswagen2.cor = "Amarelo e Preto";
            vehicleVolkswagen2.numeroRodas = 6;
            vehicleVolkswagen2.especie = "Ônibus";
            vehicleVolkswagen2.categoria = "Transporte Escolar";
            vehicleVolkswagen2.peso = 15000.0;

        //definindo os elementos do array 'vehicleArray'
        vehicleArray[0] = vehicleFiat1;
        vehicleArray[1] = vehicleFiat2;
        vehicleArray[3] = vehicleChevrolet1;
        vehicleArray[2] = vehicleChevrolet2;
        vehicleArray[4] = vehicleVolkswagen1;
        vehicleArray[5] = vehicleVolkswagen2;

        //usando o método de clonagem 'cloneArray' (criando o array 'veículos clonados' a partir do array 'veículos')
        vehicleArrayClone = cloneArray(vehicleArray);

        //impressão dos elementos do array 'vehicleArrayClone' ('veículos clonados')
        System.out.println("------------------------------------ARRAY DE VEÍCULOS CLONADOS------------------------------------\n");
        print.represent(vehicleArrayClone);
        System.out.println("--------------------------------------------------------------------------------------------------\n");
    
    }

    //método de clone do array de veículos em um novo array (array -> arrayClone)
    private static Vehicle[] cloneArray(Vehicle[] array){

        //clonagem dos elementos (objetos) do array de veículos usando o método 'clone'
        Vehicle[] arrayClone = array.clone();

        return arrayClone;

    }

}