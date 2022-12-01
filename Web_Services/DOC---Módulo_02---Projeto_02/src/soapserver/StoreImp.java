/**
 *  
 * Service Implementation Bean (SIB)
 */

//pacote base
package soapserver;

/**
 *
 * @author victoroliveira
 */

import javax.jws.WebService;   //import do pacote 'jws.WebService' e uso de annotation @WebService

@WebService(endpointInterface = "Store")   //@WebService indica a classificação de tipo 'Web Service'
public class StoreImp implements Store {   //classe 'StoreImp'

    @Override
    public String registrationData(String customerCPF){

        return "Nome: Victor Oliveira" + " | CPF: " + customerCPF;

    };

    @Override
    public String products(int orderNumber){

        return "Produtos: " + "Geladeira, " + "Armário, " + "Guarda-Roupa";

    };

    @Override
    public double finalValue(int orderNumber){

        return 4025.89;

    };

    @Override
    public boolean newCustomer(String customerCPF){

        return false;

    };
    
};
