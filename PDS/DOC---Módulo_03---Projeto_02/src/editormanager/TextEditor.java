//pacote base
package editormanager;

//import da classe 'Text' e dos módulos 'File', 'HashMap' e 'Map'
import concreteobserver.Text;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

//classe 'TextEditor' (gerenciador da edição de texto)
public class TextEditor {

    //atributo 'eventWatcher' (observador de eventos)
    Map<String, Map<Integer, Text>> eventWatcher = new HashMap<>();

    //construtor de 'TextEditor'
    public TextEditor(String... eventType) {

        for (String event : eventType) {

            this.eventWatcher.put(event, new HashMap<>());

        }
        
    }

    //método para inserção de linha no editor de texto
    public void insertLine(String eventType, Integer lineNumber, Text text) {

        if (!"EOF".equals(text.getText())){

            Map<Integer, Text> observers = eventWatcher.get(eventType);
            observers.put(lineNumber, text);

        }

    }

    //método para remoção de linha do editor de texto
    public void removeLine(String eventType, Integer lineNumber) {

        Map<Integer, Text> observers = eventWatcher.get(eventType);
        observers.remove(lineNumber);

    }

    //método para notificação dos observadores
    public void notifyObservers(String eventType, File file) {

        Map<Integer, Text> observers = eventWatcher.get(eventType);

        for (Text text : observers.values()) {

            text.update(eventType, file);

        }

    }
    
}