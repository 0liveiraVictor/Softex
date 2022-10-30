//importação da biblioteca 'express'
const express = require("express");

//variável principal do servidor
const server = express();

//definição da porta de acesso do servidor
const portAcess = 3479;

//requisição 'get'
server.get('/', (request, response)=>{

    //resposta da solicitação requisitada pelo cliente
    return response.send("<h1>Requisição HTTP do tipo 'get'</h1>" + "<h2>Solicitando Dados | Lendo Dados</h2>");

});

//requisição 'post'
server.post('/', (request, response)=>{

    //resposta da solicitação requisitada pelo cliente
    return response.send("<h1>Requisição HTTP do tipo 'post'</h1>" + "<h2>Criando Entidades | Editando Entidades | Enviando Dados</h2>");

});

//requisição 'put'
server.put('/', (request, response)=>{

    //resposta da solicitação requisitada pelo cliente
    return response.send("<h1>Requisição HTTP do tipo 'put'</h1>" + "<h2>Atualizando Dados | Substituindo Recursos</h2>");

});

//requisição 'delete'
server.delete('/', (request, response)=>{

    //resposta da solicitação requisitada pelo cliente
    return response.send("<h1>Requisição HTTP do tipo 'delete'</h1>" + "<h2>Excluindo Entidades</h2>");

});

//conexão de acesso ao servidor
server.listen(portAcess, ()=>{

    //impressão no console da "ligação" do servidor
    console.log(`-------------------------------------------------------------------------------------`); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log(`-------------------------------------------------------------------------------------`);

});