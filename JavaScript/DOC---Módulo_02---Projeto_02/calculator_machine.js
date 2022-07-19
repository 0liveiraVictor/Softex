//importando o módulo 'prompt-sync' (para uma constante) para executar modo leitura de dados no console
const promptSync = require('prompt-sync')({sigint: true});

//declarando quatro variáveis: valor1, valor2, resultado e op (símbolo do tipo 'string' da operação)  
var valor1, valor2, resultado, op;

console.log("---------------------------------------- MÁQUINA DE CALCULAR ----------------------------------------");

//leitura das três variáveis (operandos e operador)
valor1 = parseFloat(promptSync("\nDigite o PRIMEIRO valor da operação: "));
valor2 = parseFloat(promptSync("Digite o SEGUNDO valor da operação: "));
console.log("\nUse a simbologia aritmética do menu abaixo para definir sua operação básica.");
console.log("\n_____Menu de Operações_____");
console.log("SOMA: '+' \nSUBTRAÇÃO: '-' \nMULTIPLICAÇÃO: '*' \nDIVISÃO: '/'");
op = promptSync("\nDigite o SÍMBOLO da operação desejada: ");

//avaliação da opção de operação digitada, cálculo e exibição do resultado final
if (op == '+') {

    resultado = valor1 + valor2;
    console.log("\nA SOMA da operação foi: " + resultado.toString());
    
} else if (op == '-') {

    resultado = valor1 - valor2;
    console.log("\nA SUBTRAÇÃO da operação foi: " + resultado.toString());
    
} else if (op == '*') {

    resultado = valor1 * valor2;
    console.log("\nA MULTIPLICAÇÃO da operação foi: " + resultado.toString());
    
} else if (op == '/') {

    if (valor2 != 0) {

    var resto = valor1 % valor2;
    resultado = (valor1 - resto) / valor2;
    console.log("\nA DIVISÃO inteira da operação foi: " + resultado.toString());
    console.log("com resto de: " + resto.toString());
        
    } else {

        console.log("\nCálculo INDETERMINADO! O denominador não pode ser nulo.");   

    }
   
} else {

    console.log("\nVocê digitou alguma opção de operação INVÁLIDA.");

}

console.log("\n----------------------------------------------------------------------------------------------------");