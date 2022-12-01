/**
 * 
 * Publisher
 */

//pacote base
package soapserver;

/**
 *
 * @author victoroliveira
 */

import javax.xml.ws.Endpoint;   //import para publicação do serviço em um servidor

//classe para publicação do 'Web Service'
public class StorePublisher {

    //função principal
    public static void main(String[] args) {
        
        String URL = "http://127.0.0.1:8080/soapserver";   //URL do servidor SOAP definido na porta 8080
        StoreImp Store = new StoreImp();   //instância da classe StoreImp
        Endpoint.publish(URL, Store);   //publicação do serviço 'Web Service'

    };
    
};
