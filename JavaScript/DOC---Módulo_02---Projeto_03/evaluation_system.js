//importando o módulo 'prompt-sync' (para uma constante) para executar modo leitura de dados no console
const promptSync = require('prompt-sync')({sigint: true});

//declarando as três variáveis das três notas, soma total e média das notas
var nota1, nota2, nota3, soma, media;

console.log("----------------------------------- SISTEMA DE AVALIAÇÃO ESCOLAR -----------------------------------");
console.log(" ");

//leitura das três notas do aluno
nota1 = parseFloat(promptSync("Digite sua PRIMEIRA nota (entre 0 e 10): "));
nota2 = parseFloat(promptSync("Digite sua SEGUNDA nota (entre 0 e 10): "));
nota3 = parseFloat(promptSync("Digite sua TERCEIRA nota (entre 0 e 10): "));

//manipulação dos dados de entrada e cálculo da média
soma = (nota1 + nota2 + nota3);
media = soma/3;

//definição do resultado mediante uso do OPERADOR TERNÁRIO
var resultado = (media >= 7) ? 'Você foi APROVADO.' : 'Você foi REPROVADO.'

//exibição do resultado para o aluno
console.log(" ");
console.log(resultado);
console.log(" ");

console.log("----------------------------------------------------------------------------------------------------");