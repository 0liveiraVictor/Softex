//importação da biblioteca 'express'
const express = require("express");

//variável principal do servidor
const server = express();

//definição da porta de acesso do servidor
const portAcess = 8080;

//requisição 'http get' com uso de placeholder 'request.params'
server.get('/rota/:nome/:sobrenome', (request, response)=>{

    const name = request.params.nome;
    const lastName = request.params.sobrenome;

    //resposta da solicitação realizada pelo cliente
    response.send("<<< Resposta para a requisição HTTP 'get' solicitada pelo cliente (com uso de placeholder 'req.params') >>>" + `<h1> <<< Seja Bem-Vindo ${name} ${lastName} >>> </h1>`);

})

//requisição 'http get'
server.get('/rota', (request, response)=>{

    //resposta da solicitação realizada pelo cliente
    response.send("<<< Resposta para a requisição HTTP 'get' solicitada pelo cliente! >>>");

})

//requisição 'http post'
server.post('/rota', (request, response)=>{

    //resposta da solicitação realizada pelo cliente
    response.send("<<< Resposta para a requisição HTTP 'post' solicitada pelo cliente! >>>");

})

//conexão de acesso ao servidor
server.listen(portAcess, ()=>{

    //impressão no console da execução do servidor
    console.log(`-------------------------------------------------------------------------------------`); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log(`-------------------------------------------------------------------------------------`);

});
