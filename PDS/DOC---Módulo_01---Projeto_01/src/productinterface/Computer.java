//package base
package productinterface;

//interface comum aos produtos computadores 'pc' e 'server'
public interface Computer{

    //assinaturas dos métodos 'getters' para os computadores
    String getType();
    int getHdd();
    int getRam();
    double getCpu();

    //assinatura do método 'toString'
    String toString();

}