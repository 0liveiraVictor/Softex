//pacote base
package concreteobserver;

//import da interface 'Observer' e do módulo 'File'
import observer.Observer;
import java.io.File;

//classe 'Text'
public class Text implements Observer {

    //atributo de 'Text'
    private String text;

    //método 'get' de 'Text'
    public String getText() {

        return text;

    }

    //construtor de 'Text'
    public Text(String texto){

        this.text = texto;

    }  

    //método 'update'
    public void update(String event, File file){

        System.out.println("TEXTO: '" + text + "' CONSTA EM: '/" + file + "' MEDIANTE DISPARO, PELO EDITOR, DO EVENTO >>>>>     '" + event + "'");

    }
    
}