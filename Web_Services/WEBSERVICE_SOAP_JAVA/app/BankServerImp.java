/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package app;

/**
 *
 * @author victoroliveira
 */

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "BankServer")
public class BankServerImp implements BankServer {

    @Override
    public String pegarBoleto(String codigoBarras){

        return "Boleto para o código " + codigoBarras;

    };

    @Override
    public String criarBoleto(float valor, String cpfCliente){

        return "123.456.789.10";

    };

    @Override
    public boolean verificarPagamento(String codigoBarras){

        return true;

    };

    @Override
    public boolean cancelarBoleto(String codigoBarras){

        return false;

    };
    
};

