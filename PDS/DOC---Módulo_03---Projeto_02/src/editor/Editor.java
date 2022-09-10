//pacote base
package editor;

//import da classe 'TextEditor' e do módulo 'File'
import editormanager.TextEditor;
import java.io.File;

//classe 'Editor'
public class Editor {

    //atributos de 'Editor'
    public TextEditor editManager;
    private File file;

    //construtor de 'Editor'
    public Editor() {

        //instância dos dois modos de disparos de eventos: "open" e "save" (a partir da própria classe 'TextEditor')
        this.editManager = new TextEditor("open", "save");

    }

    //método para disparo do evento "open" e notificação dos objetos que o assinam
    public void openExecute(String filePath) {

        this.file = new File(filePath);
        editManager.notifyObservers("open", file);

    }

    //método para disparo do evento "save" e notificação dos objetos que o assinam
    public void saveExecute() throws Exception {

        if (this.file != null) {

            editManager.notifyObservers("save", file);

        } else {

            throw new Exception("É necessário, primeiramente, abrir o arquivo.");

        }

    }
    
}