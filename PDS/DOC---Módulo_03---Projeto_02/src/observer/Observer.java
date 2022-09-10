//pacote base
package observer;

//import do módulo 'File'
import java.io.File;

//interface 'Observer'
public interface Observer {

    //assinatura do método 'update'
    public abstract void update(String event, File file);
    
}