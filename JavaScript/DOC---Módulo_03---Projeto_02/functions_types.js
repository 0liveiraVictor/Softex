//função tradicional sem parâmetro (FUNÇÃO 1)
function exibeCalculadora() {

    return "--------------------------------- FUNÇÃO CALCULADORA INICIALIZADA... ---------------------------------";

}

//função tradicional com parâmetros (FUNÇÃO 2)
function Calcula(n1, n2) {

    return n1 ** n2;

}

//arrow function com parâmetros (FUNÇÃO 3)
const arrowCalcula = (n3, n4) => n3 - n4;

//inicializando a calculadora com a FUNÇÃO 1
console.log(exibeCalculadora());

//realizando operação de potência com a FUNÇÃO 2 (ex. operação na base 2)
resultado1 = Calcula(2, 6);
console.log("\n___Operação de Potência na Base 2___");
console.log("2^6 = " + resultado1.toString());

//realizando operação de subtração com a FUNÇÃO 3
resultado2 = arrowCalcula(300, 541)
console.log("\n___Operação de Subtração___");
console.log("300 - 541 = " + resultado2.toString());

console.log("------------------------------------------------------------------------------------------------------");