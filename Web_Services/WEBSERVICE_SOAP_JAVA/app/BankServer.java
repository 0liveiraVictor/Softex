/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package app;

/**
 *
 * @author victoroliveira
 */

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface BankServer {

    @WebMethod String pegarBoleto(String codigoBarras);
    @WebMethod String criarBoleto(float valor, String cpfCliente);
    @WebMethod boolean verificarPagamento(String codigoBarras);
    @WebMethod boolean cancelarBoleto(String codigoBarras);
    
}

