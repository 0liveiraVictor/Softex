//método construtor para objetos do tipo 'Banco'
function Banco(agencia, conta, tipo, saldo){

    //atributos do método construtor
    this.agencia = agencia;
    this.conta = conta;
    this.tipo = tipo;
    this.saldo = saldo;

    //método para consulta do número da conta
    this.Conta = function (){

        return console.log(`Número da ${this.tipo}: ${this.conta}`);

    }

    //método para consulta do saldo atual da conta
    this.Saldo = function (){

        return console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);

    } 

    //método para depósito de valor na conta (soma com atual saldo)
    this.Deposito = function (addition){

        this.saldo = this.saldo + addition; //ou this.saldo += addition;
        return console.log(`Depósito efetuado com sucesso! Valor: R$ ${addition.toFixed(2)}.`);

    }

    //método para saque de valor em conta (subtração sobre atual saldo)
    this.Saque = function (removal){

        if(removal > this.saldo){

            return console.log('Saldo insuficiente para saque! Por favor, verifique seu saldo.');

        } else{

            this.saldo = this.saldo - removal; //ou this.saldo -= removal;
            return console.log(`Saque autorizado! Valor: R$ ${removal.toFixed(2)}. Retire seu dinheiro >>>`);   

        }

    }

}

//instânciando o objeto do tipo 'Banco' na variável 'account'
var account = new Banco('1245-9', '71.419-4', "conta salário", 3500);

/*O objeto 'account' (instânciado acima) apresenta propriedades que incluem numeração de conta, saldo, tipo da conta e agência.
Além disso, 'account' abrange métodos específicos que foram definidos dentro da função (construtor) 'Banco', os quais constam: 
consulta do número da conta, saldo, realização de depósito e saque. Os exemplos abaixo ilustram seus usos: 

-> account.Conta();

-> account.Saldo();

-> account.Deposito(500);

-> account.Saque(300);*/