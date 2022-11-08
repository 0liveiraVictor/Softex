const express = require('express'); //importação da biblioteca 'express'
const cors = require('cors'); //importação da biblioteca 'cors'
const bodyParser = require('body-parser'); //importação da biblioteca 'body-parser'

const server = express(); //variável principal do servidor
server.use(bodyParser.json()); //configurando o servidor para que o body ('body-parser') das requisições seja interpretado como JSON
server.use(cors()); //configurando o servidor para uso do 'cors'

//definição da porta de acesso do servidor
const portAcess = 8080;

//definindo um banco de dados como sendo um array 'lista'
const lista = [];

// ------------------------------ Requisição HTTP POST ------------------------------
// Criando Entidades | Editando Entidades | Enviando Dados

// *********** adição de dados **********
server.post('/movie/add', (request, response)=>{

    let position = lista.length + 1; //valor da posição (índice + 1) atual da lista
    let movie = request.body; //recebendo os dados do filme a partir do corpo da requisição
    lista.push(movie); //adicionando o filme no banco de dados (lista)
    movie.posicao = position; //atribuição da posição do filme na lista

    //resposta da solicitação requisitada pelo cliente
    return response.status(201).json({

        Status: 'Filme adicionado na cinemateca com sucesso!',
        Catalogo_add: movie

    });

});

// ------------------------------ Requisição HTTP GET ------------------------------
// Solicitando Dados | Lendo Dados

// *********** visualização de todos os dados ********** 
server.get('/movie/show', (request, response)=>{

    if(lista.length == 0){

        //resposta da solicitação requisitada pelo cliente
        return response.status(404).send('<h2>Cinemateca vazia!</h2>');

    } else{

        //resposta da solicitação requisitada pelo cliente
        return response.status(200).json({
            
            Status: 'Cinemateca encontrada!',
            Catalogo_all: lista
        
        });

    }

});

// *********** visualização de dados por identificadores ('position') ********** 
server.get('/movie/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'

    if(id > 0 && id <= lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `${id}º filme encontrado na cinemateca!`,
            Catalogo_id: lista[id-1]

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Filme não encontrado!</h2>');

    }

});

// ------------------------------ Requisição HTTP PUT ------------------------------
// Atualizando Dados | Substituindo Recursos

// *********** atualização de dados por identificadores ('position') **********
server.put('/movie/edit/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'   

    if(id > 0 && id <= lista.length){

        let movie = request.body; //recebendo os dados do filme a partir do corpo da requisição
        lista[id-1] = movie; //atualizando o filme no banco de dados (lista)
        movie.posicao = parseInt(id); //atribuição da posição do filme na lista

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `${id}º filme atualizado na cinemateca com sucesso!`,
            newCatalogo_id: lista[id-1]

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Filme não encontrado!</h2>' + '<h2>Atualização não realizada!</h2>');

    }

});

// ------------------------------ Requisição HTTP DELETE ------------------------------
// Excluindo Entidades

// *********** deleção de dados **********
server.delete('/movie/del/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'   

    if(id > 0 && id <= lista.length){

        lista.splice(id-1, 1); //removendo os dados do filme a partir da requisição solicitada pelo cliente

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `Filme deletado da cinemateca com sucesso!`,
            Catalogo_all: lista

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Filme não encontrado!</h2>' + '<h2>Deleção não realizada!</h2>');

    }

});

// ------------------------------ Requisição HTTP ALL ------------------------------
// Tratamento de Erros

// *********** endpoint **********
server.all('*', (request, response)=>{

    //resposta ao cliente caso haja erro de sintaxe na solicitação da requisição
    return response.status(404).send('<h2>Página não encontrada!</h2>');

});

//conexão de acesso ao servidor
server.listen(portAcess, ()=>{

    //impressão no console da "ligação" do servidor
    console.log('-------------------------------------------------------------------------------------'); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log('-------------------------------------------------------------------------------------');

});