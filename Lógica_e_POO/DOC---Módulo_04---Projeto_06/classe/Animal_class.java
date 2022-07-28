//definindo o pacote da classe 'Animal_class'
package classe;

//implementando a interface java 'Serializable' no código
import java.io.Serializable;

//definindo a classe 'Animal_class' e implementando a interface 'Serializable'(a fim de torna a classe serializável)
public class Animal_class implements Serializable{

    //atributos (tipo de animal, nome, raça e idade)
    private String animal;
    private String nome;
    private String raca;
    private int idade;

    //administrador de versão da classe (modificador)
    private static final long serialVersionUID = 1l;

    //construtor padrão da classe 'Animal_class' (método explícito) (instância dos objetos para o programa principal)
    public Animal_class(){};

    //construtor da classe 'Animal_class' (método implícito)
    public Animal_class(String animal, String nome, String raca, int idade){

        this.animal = animal;
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;

    }

    //método 'get' do atributo 'animal'
    public String getAnimal(){

        return animal;

    }

    //método 'set' do atributo 'animal'
    public void setAnimal(String animal){

        this.animal = animal;

    }

    //método 'get' do atributo 'nome'
    public String getNome(){

        return nome;

    }

    //método 'set' do atributo 'nome'
    public void setNome(String nome){

        this.nome = nome;

    }

    //método 'get' do atributo 'raca'
    public String getRaca(){

        return raca;

    }

    //método 'set' do atributo 'raca'
    public void setRaca(String raca){

        this.raca = raca;

    }

    //método 'get' do atributo 'idade'
    public int getIdade(){

        return idade;

    }

    //método 'set' do atributo 'idade'
    public void setIdade(int idade){

        this.idade = idade;

    }

}