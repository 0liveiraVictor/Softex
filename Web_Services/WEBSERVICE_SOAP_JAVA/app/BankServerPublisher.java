/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package app;

/**
 *
 * @author victoroliveira
 */

import app.BankServerImp;
import javax.xml.ws.Endpoint;

public class BankServerPublisher {

    public static void main(String[] args) {
        
        String URL = "http://127.0.0.1:3030/app";
        BankServerImp Bank = new BankServerImp();
        Endpoint.publish(URL, Bank);

    }
    
}

