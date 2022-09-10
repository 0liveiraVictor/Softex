//pacote base
package client;

//import das classes 'Editor' e 'Text'
import editor.Editor;
import concreteobserver.Text;

//classe 'Application'
public class Application {

    //programa principal
    public static void main(String[] args) {

        //instância de um objeto 'Editor' e também (por consequência) de um objeto 'TextEditor'
        Editor editor = new Editor();

        //instânciando os objetos da classe 'Text' para o evento de notificação "open"
        Text open1 = new Text("A independência do Brasil aconteceu no dia 7 de setembro de 1822,");
        Text open2 = new Text("e,");
        Text open3 = new Text("por meio desse acontecimento,");
        Text open4 = new Text("o país conquistou a sua emancipação de Portugal.");
        Text open5 = new Text("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        Text open6 = new Text("Nesse dia aconteceu o grito da independência,");
        Text open7 = new Text("realizado às margens do Rio Ipiranga,");
        Text open8 = new Text("em São Paulo,");
        Text open9 = new Text("e dado por Pedro de Alcântara (futuro D. Pedro I).");
        Text open10 = new Text("A independência brasileira foi acompanhada por pequenos conflitos armados,");
        Text open11 = new Text("localizados principalmente no Nordeste.");
        Text open12 = new Text("REF: https://escolakids.uol.com.br/historia/independencia-do-brasil.htm");
        Text open13 = new Text("EOF");     

        //instânciando os objetos da classe 'Text' para o evento de notificação "save"
        Text save1 = new Text("As pesquisas eleitorais recentes que mostram diminuição na distância entre Luiz Inácio Lula da Silva (PT) e Jair Bolsonaro (PL) indicam uma “reta final acirrada”.");
        Text save2 = new Text("É o que diz o professor da Fundação Dom Cabral,");
        Text save3 = new Text("Bruno Carazza,");
        Text save4 = new Text("em entrevista à CNN.");
        Text save5 = new Text("REF: https://www.cnnbrasil.com.br/politica/pesquisas-mostram-que-disputa-entre-lula-e-bolsonaro-pode-ter-reta-final-acirrada-diz-especialista/");
        Text save6 = new Text("EOF");

        //inserindo as linhas de texto, em ordem, para o evento de notificação "open" no objeto 'Editor'
        editor.editManager.insertLine("open", 1, open1);
        editor.editManager.insertLine("open", 2, open2);
        editor.editManager.insertLine("open", 3, open3);
        editor.editManager.insertLine("open", 4, open4);
        editor.editManager.insertLine("open", 5, open5);
        editor.editManager.insertLine("open", 6, open6);
        editor.editManager.insertLine("open", 7, open7);
        editor.editManager.insertLine("open", 8, open8);
        editor.editManager.insertLine("open", 9, open9);
        editor.editManager.insertLine("open", 10, open10);
        editor.editManager.insertLine("open", 11, open11);
        editor.editManager.insertLine("open", 12, open12);
        editor.editManager.insertLine("open", 13, open13);       

        //removendo, por conveniência, a linha de texto '5' para o evento de notificação "open" no objeto 'Editor' (apenas para testar o método 'removeLine')
        editor.editManager.removeLine("open", 5);

        //inserindo as linhas de texto, em ordem, para o evento de notificação "save" no objeto 'Editor'
        editor.editManager.insertLine("save", 1, save1);
        editor.editManager.insertLine("save", 2, save2);
        editor.editManager.insertLine("save", 3, save3);
        editor.editManager.insertLine("save", 4, save4);
        editor.editManager.insertLine("save", 5, save5);
        editor.editManager.insertLine("save", 6, save6);
        
        try {

            System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
            System.out.println("<<< DISPARO DO EVENTO 'open': >>> \n");

            //disparando o evento "open" e notificando cada um dos objetos que realizaram sua assinatura
            editor.openExecute("brazilReports.txt");
            
            System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
            System.out.println("<<< DISPARO DO EVENTO 'save': >>> \n");
            
            //disparando o evento "save" e notificando cada um dos objetos que realizaram sua assinatura
            editor.saveExecute();
            
            System.out.println("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

        } catch (Exception erro) {

            System.out.println("ERRO.");

        }
        
    }
    
}