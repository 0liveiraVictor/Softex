//função de listagem das propriedades do objeto (incluindo os valores!)
function listaPropriedades (param){

    console.log('\nPropriedades do Objeto:\n');

    //aplicação do loop 'for' (IN)
    for (const i in param){

        console.log(`${i}: ${param[i]}`);

    }

    console.log('\n**************************************************************************************');

}

//função de listagem dos elementos (valores) do array
function listaElementos (param){

    console.log('\nElementos do Array:\n');

    //aplicação do loop 'for' (OF)
    for (const i of param){

        console.log(`${i}`);

    }

    console.log('');

}

//definindo um objeto (a partir de um inicializador) e um array 
const candidato = {Nome: 'André Janones', Idade: 38, Partido: 'Avante', Estado: 'Minas Gerais'};
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//exibição dos resultados das listagens
console.log('-------------------------LISTAGEM DE PROPRIEDADES E ELEMENTOS-------------------------');

listaPropriedades(candidato);

listaElementos(numeros);

console.log('--------------------------------------------------------------------------------------');