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

// ------------------------------ C r u d  CREATE com a requisição HTTP POST ------------------------------

// *********** envio de dados **********
server.post('/book/add', (request, response)=>{

    let position = lista.length + 1; //valor da posição (índice + 1) atual do banco de dados
    let book = request.body; //recebendo os dados do livro a partir do corpo da requisição
    lista.push(book); //adicionando o livro no banco de dados
    book.posicao = position; //atribuição da posição do livro no banco de dados

    //resposta da solicitação requisitada pelo cliente
    return response.status(201).json({

        Status: 'Livro registrado com sucesso!',
        Livro_add: book

    });

});

// ------------------------------ c R u d  READ com a requisição HTTP GET ------------------------------

// *********** visualização de todos os dados ********** 
server.get('/book/show', (request, response)=>{

    if(lista.length == 0){

        //resposta da solicitação requisitada pelo cliente
        return response.status(404).send('<h2>Sem registros de livros na biblioteca!</h2>');

    } else{

        //resposta da solicitação requisitada pelo cliente
        return response.status(200).json({
            
            Status: 'Livraria encontrada!',
            Livro_all: lista
        
        });

    }

});

// *********** visualização de dados por identificadores ('position') ********** 
server.get('/book/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'

    if(id > 0 && id <= lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `Livro encontrado! | Registro:${id}ª posição.`,
            Livro_id: lista[id-1]

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Livro não encontrado!</h2>');

    }

});

// ------------------------------ c r U d  UPDATE com a requisição HTTP PUT ------------------------------

// *********** atualização de dados por identificadores ('position') **********
server.put('/book/edit/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'   

    if(id > 0 && id <= lista.length){

        let book = request.body; //recebendo os novos dados do livro a partir do corpo da requisição
        book.posicao = parseInt(id); //atribuição da posição do livro no banco de dados
        lista[id-1] = book; //atualizando o livro no banco de dados

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `${id}º livro atualizado com sucesso!`,
            newLivro_id: lista[id-1]

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Livro não encontrado!</h2>' + '<h2>Atualização não realizada!</h2>');

    }

});

// ------------------------------ c r u D  DELETE com a requisição HTTP DELETE ------------------------------

// *********** deleção de dados **********
server.delete('/book/del/:position', (request, response)=>{

    let id = request.params.position; //identificador 'id'   

    if(id > 0 && id <= lista.length){

        lista.splice(id-1, 1); //removendo os dados do livro a partir da requisição solicitada pelo cliente

        //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
        return response.status(200).json({

            Status: `Livro deletado com sucesso!`,
            Livro_all: lista

        });

    } else if(id <= 0 || id > lista.length){

        //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
        return response.status(404).send('<h2>Livro não encontrado!</h2>' + '<h2>Deleção não realizada!</h2>');

    }

});

// ------------------------------ Tratamento de erros com a requisição HTTP ALL ------------------------------

// *********** endpoint **********
server.all('*', (request, response)=>{

    //resposta ao cliente caso haja erro de sintaxe na solicitação da requisição
    return response.status(404).send('<h2>Página não encontrada!</h2>');

});

// ------------------------------ Acesso à conexão ------------------------------

//conexão de acesso ao servidor
server.listen(portAcess, ()=>{

    //impressão no console da "ligação" do servidor
    console.log('-------------------------------------------------------------------------------------'); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log('-------------------------------------------------------------------------------------');

});