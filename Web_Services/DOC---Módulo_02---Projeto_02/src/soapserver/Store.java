/**
 *  
 * Service Endpoint Interface (SEI) 
 */

//pacote base
package soapserver;

/**
 *
 * @author victoroliveira
 */

import javax.jws.WebService;   //import do pacote 'jws.WebService' e uso de annotation @WebService 
import javax.jws.WebMethod;   //import do pacote 'jws.WebMethod' e uso de annotation @WebMethod
import javax.jws.soap.SOAPBinding;   //import do pacote 'jws.soap.SOAPBinding' e uso de annotation @SOAPBinding
import javax.jws.soap.SOAPBinding.Style;   //import do pacote 'jws.soap.SOAPBinding' e uso de annotation @SOAPBinding com parâmetro 'style'

@WebService   //@WebService indica a classificação de tipo 'Web Service'
@SOAPBinding(style = Style.RPC)   //@SOAPBinding é a indicação do serviço de tipo 'SOAP'
public interface Store {   //interface 'Store'

    //@WebMethod sempre é relativo a uma operação do serviço 'Web'
    @WebMethod String registrationData(String customerCPF);
    @WebMethod String products(int orderNumber);
    @WebMethod double finalValue(int orderNumber);
    @WebMethod boolean newCustomer(String customerCPF);
    
};
