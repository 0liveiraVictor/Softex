//importando o módulo 'prompt-sync' (para uma constante) para executar modo leitura de dados no console
const promptSync = require('prompt-sync')({sigint: true});

//declarando as três variáveis das três notas
var nota1, nota2, nota3;

console.log("----------------------------------- SISTEMA DE AVALIAÇÃO ESCOLAR -----------------------------------");
console.log(" ");

//leitura das duas primeiras notas do aluno
nota1 = parseFloat(promptSync("Digite sua PRIMEIRA nota (entre 0 e 10): "));
nota2 = parseFloat(promptSync("Digite sua SEGUNDA nota (entre 0 e 10): "));

//cálculo da terceira nota (mínima) necessário para aprovação
nota3 = 21 - (nota1 + nota2)

/* OBS:. Vale lembrar que se o aluno necessitar obter uma nota MAIOR que 10 para terceira nota, ele estará condicionalmente REPROVADO.
Essa abordagem, nesse caso, não será avaliada. Tratamentos mais detalhados devem ser revisados em problemas mais específicos. */

//exibição do resultado para o aluno
console.log(" ");
console.log("A nota mínima necessária para sua APROVAÇÃO é: " + nota3);
console.log(" ");

console.log("----------------------------------------------------------------------------------------------------");